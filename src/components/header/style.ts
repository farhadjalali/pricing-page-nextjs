import { Button } from "@/common/Button";
import styled from "styled-components";

export const Component = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 80px;
  @media (max-width: 768px) {
    padding: 60px 24px 0 24px;
  }
`;

export const MenusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 1320px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.DarkText};
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  gap: 4px;
  cursor: pointer;
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media (max-width: 1320px) {
    display: none;
  }
`;

export const Signup = styled(Button)`
  width: 104px;
  height: 48px;
  flex-grow: 0;
`;

export const Login = styled(Button)`
  width: 104px;
  height: 48px;
  color: ${({ theme }) => theme.colors.DarkText};
  background-color: white;
`;

export const MobileMenu = styled.a`
  cursor: pointer;
  @media (min-width: 1320px) {
    display: none;
  }
`;

export const BrandLink = styled.a`
  width: 205px;
  @media (max-width: 768px) {
    width: 170px;
  }
`;
