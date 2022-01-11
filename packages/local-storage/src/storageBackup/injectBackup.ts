const STORAGE = window.localStorage

type StoreBackup = Record<string, unknown>

const writeBackupIntoStorage = (backup: StoreBackup) => {
  Object.keys(backup).forEach(key =>
    STORAGE.setItem(key, JSON.stringify(backup[key]))
  )
}

const filterWantedKeys = (keys: string[], backup: StoreBackup) => {
  const filteredBackup: StoreBackup = {}
  Object.keys(backup)
    .filter(key => keys.includes(key))
    .forEach(key => (filteredBackup[key] = backup[key]))
  return filteredBackup
}

export const injectBackup = (keys: string[], backupFile: File) =>
  backupFile.text().then(content => {
    try {
      const backup = JSON.parse(content) as StoreBackup

      writeBackupIntoStorage(filterWantedKeys(keys, backup))

      return true
    } catch {
      return false
    }
  })
