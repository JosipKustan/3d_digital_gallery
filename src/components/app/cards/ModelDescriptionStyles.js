import styled from "styled-components";
import theme from "../../theme";

export const ModelDescriptionWrapper = styled.div`
  width: 90%;
  max-width: 540px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${theme.colors.white};
  background: ${theme.colors.purple_dark_transparent};
  border-radius: ${theme.border.big};
  box-sizing: border-box;

  padding: 16px;
  margin-top: 300px;

  border: solid 3px ${theme.colors.purple_accent};
  border-radius: ${theme.border.medium};

  z-index: 10;
`;
