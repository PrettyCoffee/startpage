import { createStorageBlob } from "./createStorageBlob"
import { downloadBlob } from "./downloadBlob"
import { injectBackup } from "./injectBackup"

export type Backup = {
  /**Creates an url which can be used to access a backup from the storage
   *
   * @returns the url to a blob file which contains the storage
   */
  createBlobUrl: () => string

  /**Starts a download for the backup file
   *
   * @param fileName the name of the downloaded file, the extension should be .json
   */
  download: (fileName?: string) => void

  /**Function to restore a backup into the storage
   *
   * @param backupFile [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object of the backup file
   *
   * @returns a promise which resolves to a success boolean
   */
  restore: (backupFile: File) => Promise<boolean>
}

/** Provides functions to create, download and restore backups
 *
 * @param keys the keys of the storage which should be backed up, defaults to all keys
 *
 * @returns an object which contains the needed functions
 */
export const storageBackup = (keys = Object.keys(localStorage)): Backup => {
  const createBlobUrl = () => createStorageBlob(keys)

  const download = (fileName = "ls-backup.json") =>
    downloadBlob(createBlobUrl(), fileName)

  const restore = (backupFile: File) => injectBackup(keys, backupFile)

  return {
    createBlobUrl,
    download,
    restore,
  }
}
