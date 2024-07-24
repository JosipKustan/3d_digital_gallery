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
`;
