import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faFileDownload, faFileUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { storageBackup } from "../../../../src"
import { Button } from "../../components/Button"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    gap: ${space.large};
    margin: ${space.large} 0 0 ${space.medium};
    svg {
      margin-left: ${space.small};
    }
  `}
`

const Link = styled.a`
  ${({ theme: { color } }) => css`
    font-weight: 700;
    color: ${color.primary.fg};
    text-decoration: none;
    :hover {
      color: ${color.primary.base};
      text-decoration: underline;
    }
  `}
`

export const FileInput = styled.div`
  ${({ theme: { color, space } }) => css`
    position: relative;
    > label {
      content: "Restore your backup";
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${color.fg.surface};
      border: none;
      border-radius: ${space.small};
      padding: 0 ${space.medium};
      height: ${space.largest};
      cursor: pointer;
      outline: ${color.fg.shade} dashed;
      :hover {
        background-color: ${color.bg.surface};
        color: ${color.fg.surface};
      }
    }
    > input {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }
  `}
`

const Backup = storageBackup(["theme", "hook-demo", "context-demo"])

export const BlobLinkDemo = () => (
  <Wrapper>
    <Link href={Backup.createBlobUrl()}>Open blob file</Link>
  </Wrapper>
)
export const DownloadDemo = () => (
  <Wrapper>
    <Button onClick={() => Backup.download("demo-backup.json")}>
      Export Storage <FontAwesomeIcon icon={faFileDownload} />
    </Button>
  </Wrapper>
)
export const ImportDemo = () => (
  <Wrapper>
    <FileInput>
      <input
        type="file"
        id="backup-demo"
        onChange={({ target: { files } }) =>
          files?.[0] && Backup.restore(files[0])
        }
      />
      <label htmlFor="backup-demo">
        Import Storage <FontAwesomeIcon icon={faFileUpload} />
      </label>
    </FileInput>
  </Wrapper>
)
