import { createStorageBlob } from "./createStorageBlob"
import { downloadBlob } from "./downloadBlob"
import { injectBackup } from "./injectBackup"

/** Provides functions to create, download and restore backups
 *
 * @param keys the keys of the storage which should be backed up
 *
 * @returns an object which contains the needed functions
 */
export const storageBackup = (keys: string[]) => {
  /**Creates an url which can be used to access a backup from the storage
   *
   * @returns the url to a blob file which contains the storage
   */
  const createBlobUrl = () => createStorageBlob(keys)

  /**Starts a download for the backup file
   *
   * @param fileName the name of the downloaded file, the extension should be .json
   */
  const download = (fileName = "ls-backup.json") =>
    downloadBlob(createBlobUrl(), fileName)

  /**Function to restore a backup into the storage
   *
   * @param backupFile [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object of the backup file
   *
   * @returns a promise which resolves to a success boolean
   */
  const restore = (backupFile: File) => injectBackup(backupFile, keys)

  return {
    createBlobUrl,
    download,
    restore,
  }
}
