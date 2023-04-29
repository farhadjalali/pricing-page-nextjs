import styled from "styled-components";

export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 125%;
  text-align: center;
  color: #0d0c43;
`;

export const Price = styled.div`
  font-style: normal;
  text-align: center;
  font-weight: 500;
  font-size: 21px;
  line-height: 125%;
  color: #0d0c43;
`;

export const PriceWrapper = styled.div`
  background: #f8f8ff;
  border-radius: 24px;
  padding: 24px 0;
`;

export const Headline = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: #00b2c8;
`;

export const MonthlyComment = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  text-align: center;
  color: #00b2c8;
`;

export const StartButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 19px 24px;
  gap: 32px;
  background: #00b2c8;
  border-radius: 31px;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-top: auto;
`;

export const Component = styled.div`
  width: 100%;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
`;

export const Plan = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
