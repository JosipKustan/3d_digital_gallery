import styled from "styled-components";
import theme from "../theme";

export const Button = styled.button`
  border: solid 3px
    ${(props) => props.colorAccent || theme.colors.purple_accent};
  border-radius: ${theme.border.medium};
  background-color: ${(props) =>
    props.background || theme.colors.background_dark};
  color: ${(props) => props.colorText || theme.colors.white};
  padding: 16px 16px;

  font-size: 16px;
  font-weight: 500;
  width: fit-content;
  min-width: 156px;
  cursor: pointer;
  display: inline-flex;
  justify-content: space-between;
  align-content: center;
  &:hover {
    background-color: ${(props) => props.color || theme.colors.purple_dark};
  }

  @media (max-width: 420px) {
    padding: 12px 16px;
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
