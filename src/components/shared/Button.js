import styled, { css } from "styled-components";
import theme from "../theme";

const variants = {
  primary: css`
    border-color: rgba(193, 94, 253, 0.55);
    color: ${theme.colors.purple_accent};
    &:hover {
      background: rgba(193, 94, 253, 0.12);
      border-color: ${theme.colors.purple_accent};
      box-shadow: 0 0 28px rgba(193, 94, 253, 0.2);
    }
  `,
  dark: css`
    border-color: rgba(0, 0, 0, 0.55);
    color: ${theme.colors.black};
    &:hover {
      background: rgba(193, 94, 253, 0.12);
      border-color: ${theme.colors.purple_dark};
      box-shadow: 0 0 28px rgba(193, 94, 253, 0.2);
      color: ${theme.colors.purple_dark};
    }
  `,
  light: css`
    border-color: rgba(255, 255, 255, 0.55);
    color: ${theme.colors.white};
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: ${theme.colors.white};
      box-shadow: 0 0 28px rgba(255, 255, 255, 0.15);
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
    box-shadow 0.2s ease;

  ${(props) => variants[props.variant] ?? variants.primary}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
