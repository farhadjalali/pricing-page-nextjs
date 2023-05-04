import styled from "styled-components";

export const BlueRoundButton = styled.div`
  display: flex;
  box-sizing: border-box;
  white-space: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 31px;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.Primary};
  cursor: pointer;
  outline: none;
  transition: background-color 0.15s ease-in-out 0s,
    border-color 0.15s ease-in-out 0s, color 0.15s ease-in-out 0s;
  :hover {
    background-color: #0099ac;
  }
  padding: 19px 24px;
  @media (max-width: 768px) {
    padding: 19px 16px;
  }
`;
