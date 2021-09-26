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
   * @returns the url
   */
  const createBlobUrl = () => createStorageBlob(keys)

  /**Starts a download for the backup file
   *
   * @param fileName the name of the downloaded file, the extension should be .json
   */
  const download = (fileName = "ls-backup.json") =>
    downloadBlob(createBlobUrl(), fileName)

  /**Function to inject a backup into the store
   *
   * @param backupFile File object of the backup file
   *
   * @returns a promise with a success boolean
   */
  const restore = (backupFile: File) => injectBackup(backupFile)

  return {
    createBlobUrl,
    download,
    restore,
  }
}
