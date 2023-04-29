import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-weight: bold;
  font-size: 72px;
  line-height: 105%;
  text-align: center;
  color: #0d0c43;
`;

export const PaymentTypeWrapper = styled.div`
  background: #f8f8ff;
  border-radius: 37px;
  display: flex;
  padding: 5px;
`;

export const PaymentTypeButton = styled.div.attrs({ role: "button" })<{
  selected?: boolean;
}>`
  border: none;
  background-color: ${({ selected }) => (selected ? "white" : "transparent")};
  padding: 20px 60px;
  border-radius: 37px;
  cursor: pointer;
  user-select: none;
  box-shadow: ${({ selected }) =>
    selected
      ? "0px 10px 32px rgba(5, 85, 95, 0.06),0px 8px 24px rgba(5, 85, 95, 0.04)"
      : ""};
`;

export const PricingClarification = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 400%;
  text-align: center;
  color: #7a7998;
`;

