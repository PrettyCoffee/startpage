import React from "react"

import { css } from "@emotion/css"

const styles = css`
  height: 6px;
  width: 6px;
  display: block;
  border-bottom: white solid 2px;
  border-right: white solid 2px;
  transform: rotate(45deg);
  mix-blend-mode: difference;
`

export const Arrow = () => <span className={styles} />
