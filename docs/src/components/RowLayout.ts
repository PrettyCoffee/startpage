import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const RowLayout = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    gap: ${space.large};
    font-size: ${space.medium};
  `}
`
