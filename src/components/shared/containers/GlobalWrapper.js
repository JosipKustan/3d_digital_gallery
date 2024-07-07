import styled from "styled-components";
import theme from "../../theme";

export const GlobalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  background-color: ${theme.colors.white};
`;
