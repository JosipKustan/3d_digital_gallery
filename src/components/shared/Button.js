import styled from "styled-components";
import theme from "../theme";

export const Button = styled.button`
  border: solid 3px ${theme.colors.purple_accent};
  border-radius: ${theme.border.medium};
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  padding: 16px 16px;

  font-size: 16px;
  font-weight: 500;
  width: fit-content;

  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.purple_dark};
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
