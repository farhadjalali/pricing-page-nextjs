import styled from "styled-components";

export const Component = styled.section`
  display: grid;
  gap: 25px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1300px;
  }
  padding: 40px 25px 54px 25px;
`;

export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 125%;
  text-align: center;
  color: ${({ theme }) => theme.colors.DarkText};
  margin: 16px;
`;

export const Price = styled.div`
  font-style: normal;
  text-align: center;
  font-weight: 500;
  font-size: 21px;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.DarkText};
`;

export const PriceMonthPhrase = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 125%;
`;

export const PriceWrapper = styled.div`
  background: ${({ theme }) => theme.colors.GhostWhite};
  border-radius: 24px;
  height: 82px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
`;

export const Headline = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.Primary};
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 7px;
`;

export const BenefitsWrapper = styled.div`
  padding: 22px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BenefitsList = styled.ul`
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
`;

export const BenefitsListItem = styled.li`
  font-weight: 300;
  font-size: 16px;
  line-height: 125%;
  padding: 7px 0;
  color: ${({ theme }) => theme.colors.DarkText};
`;

export const MonthlyComment = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  padding-top: 4px;
  text-align: center;
  color: ${({ theme }) => theme.colors.Primary};
`;

export const StartButton = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 19px 24px;
  gap: 32px;
  border-radius: 31px;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.Primary};
  cursor: pointer;
  outline: none;
  transition: background-color 0.15s ease-in-out 0s,
    border-color 0.15s ease-in-out 0s, color 0.15s ease-in-out 0s;
  :hover {
    background-color: #0099ac;
  }
`;

export const Card = styled.div<{ hasTopHint: boolean }>`
  overflow: clip;
  position: relative;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 24px;
  box-sizing: border-box;
  margin-top: ${({ hasTopHint }) => (hasTopHint ? "" : "38px")};
  padding: 0 8px;
  padding-top: ${({ hasTopHint }) => (!hasTopHint ? "" : "38px")};
  box-shadow: #05555f0f 0px 10px 32px, #05555f0a 0px 8px 24px;
`;

export const TopHint = styled.div`
  background-color: ${({ theme }) => theme.colors.DarkText};
  color: #ffffff;
  width: 100%;
  padding: 10px 0 8px 0;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  text-align: center;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 38px;
  z-index: 1;
`;

export const BgGradientRight = styled.div`
  right: 0;
  width: 500px;
  height: 400px;
  position: absolute;
  max-width: 50%;
  background: linear-gradient(141.55deg, #068595 -3.79%, #00b2c8 82.82%);
  opacity: 0.1;
  filter: blur(100px);
`;

export const BgGradientLeft = styled.div`
  left: 0;
  width: 500px;
  max-width: 50%;
  height: 400px;
  position: absolute;
  background: linear-gradient(141.55deg, #8e52d1 -3.79%, #b57ff1 82.82%);
  opacity: 0.1;
  filter: blur(250px);
  transform: rotate(85.26deg);
`;

export const PricingClarification = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: ${({ theme }) => theme.colors.Grey400};
  margin-bottom: 150px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const PaymentTypeWrapper = styled.div`
  background: ${({ theme }) => theme.colors.GhostWhite};
  border-radius: 37px;
  display: flex;
  padding: 5px;
`;

export const PaymentTypeButton = styled.div.attrs({
  role: "button",
})<{
  selected?: boolean;
}>`
  border: none;
  background-color: ${({ selected }) => (selected ? "white" : "transparent")};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.Primary : theme.colors.DarkText};
  :hover {
    color: ${({ theme }) => theme.colors.Primary};
  }
  transition: color 0.3s ease-in-out 0s;
  font-weight: ${({ selected }) => (selected ? "800" : "500")};
  font-size: 18px;
  line-height: 100%;
  @media screen and (min-width: 768px) {
    padding: 23px 68px;
  }
  @media screen and (max-width: 768px) {
    padding: 23px 52px;
  }
  border-radius: 37px;
  cursor: pointer;
  user-select: none;
  box-shadow: ${({ selected }) =>
    selected
      ? "0px 10px 32px rgba(5, 85, 95, 0.06),0px 8px 24px rgba(5, 85, 95, 0.04)"
      : ""};
`;
