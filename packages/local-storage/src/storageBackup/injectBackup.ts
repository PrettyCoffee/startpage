const STORAGE = window.localStorage

const writeBackupIntoStorage = (backup: Record<string, unknown>) => {
  Object.keys(backup).forEach(key =>
    STORAGE.setItem(key, JSON.stringify(backup[key]))
  )
}

const keysAreValid = (keys: string[], allowedKeys: string[]) =>
  !keys.map(key => allowedKeys.includes(key)).includes(false)

export const injectBackup = (backupFile: File, allowedKeys: string[]) =>
  backupFile.text().then(content => {
    try {
      const backup = JSON.parse(content) as Record<string, unknown>

      if (!keysAreValid(Object.keys(backup), allowedKeys)) return false

      writeBackupIntoStorage(backup)
      return true
    } catch {
      return false
    }
  })
