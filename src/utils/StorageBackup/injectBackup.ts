const STORAGE = window.localStorage

const writeBackupIntoStorage = (backup: Record<string, unknown>) => {
  Object.keys(backup).forEach(key =>
    STORAGE.setItem(key, JSON.stringify(backup[key]))
  )
}

export const injectBackup = (backupFile: File) =>
  backupFile.text().then(content => {
    try {
      const backup = JSON.parse(content) as Record<string, unknown>
      writeBackupIntoStorage(backup)
      return true
    } catch {
      return false
    }
  })
