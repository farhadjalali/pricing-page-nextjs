import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
`;

export const PageTitle = styled.h1`
  font-weight: bold;
  font-size: 72px;
  line-height: 105%;
  text-align: center;
  color: ${({ theme }) => theme.colors.DarkText};
  padding: 56px 0 32px 0;
  margin: 0;
`;
