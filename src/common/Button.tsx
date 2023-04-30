import styled from "styled-components";

export const Button = styled.div.attrs({ role: "button" })`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.Primary};
  border-radius: 31px;
  cursor: pointer;
`;
