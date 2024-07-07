import styled from "styled-components";
import theme from "../theme";

export const InfoTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
  gap: 4px;
  color: ${theme.colors.white};
  border-radius: 16px 0px 0px 16px;

  font-size: 14px;
  font-weight: 500;
`;
