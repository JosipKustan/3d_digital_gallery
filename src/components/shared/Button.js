import styled, { css } from "styled-components";
import theme from "../theme";

const variants = {
  primary: css`
    border-color: rgba(193, 94, 253, 0.55);
    color: ${theme.colors.purple_accent};
    &:hover {
      background: ${theme.colors.purple_accent};
      border-color: ${theme.colors.purple_accent};
      color: ${theme.colors.white};
    }
  `,
  dark: css`
    border-color: rgba(0, 0, 0, 0.55);
    color: ${theme.colors.black};
    &:hover {
      background: ${theme.colors.black};
      border-color: ${theme.colors.black};
      color: ${theme.colors.white};
    }
  `,
  solid: css`
    background: ${theme.colors.black};
    border-color: ${theme.colors.black};
    color: ${theme.colors.white};
    &:hover {
      background: ${theme.colors.white};
      border-color: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  `,
  light: css`
    border-color: rgba(255, 255, 255, 0.55);
    color: ${theme.colors.white};
    &:hover {
      background: ${theme.colors.white};
      border-color: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  `,
};

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 24px;
  border: 2px solid;
  background: transparent;
  font-family: "Kanit", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.22em;
  line-height: 100%;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.15s ease;

  ${(props) => variants[props.variant] ?? variants.primary}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Square, icon-only Button: always pass an aria-label
export const IconButton = styled(Button)`
  padding: 16px;
`;

export const SecondaryButton = styled.button`
  border: none;
  background: none;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  font-size: 16px;
  padding: 16px 16px;
  border-radius: ${theme.border.medium};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.purple_hover};
  }
`;
