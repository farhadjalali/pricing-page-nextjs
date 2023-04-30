import styled from "styled-components";

export const Component = styled.section`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 0 25px;
  }

  [data-plan-column="1"] {
    display: none;
  }
  [data-plan-column="2"] {
    display: none;
  }
  [data-plan-column="3"] {
    display: none;
  }
`;

export const FeaturesWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 768px) {
    border-left: 1px solid #e5f4f5;
    border-right: 1px solid #e5f4f5;
  }
`;

export const FeatureGroup = styled.div``;

export const FeatureGroupTitleWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  gap: 8px;
  border-bottom: 1px solid #e5f4f5;
  padding: 0 24px;
  :hover {
    background-color: ${({ theme }) => theme.colors.Blue100};
  }
`;

export const FeatureGroupTitle = styled.h3<{
  expanded: boolean;
}>`
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.colors.Grey400};
  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    order: 2;
    color: ${({ expanded, theme }) =>
      expanded ? theme.colors.Primary : theme.colors.Grey400};
  }
`;

export const FeatureRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding-right: 16px;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.Blue100};
    border-radius: 8px;
  }
`;

export const FeatureTitle = styled.h4`
  width: 300px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.DarkText};
  padding: 0 16px;
`;

export const FeatureCompareItem = styled.div`
  flex: 1;
  text-align: center;
`;

export const FeatureCompareItemBorder = styled.div<{ isFreePlan: boolean }>`
  display: inline-block;
  background-color: ${({ isFreePlan, theme }) =>
    isFreePlan ? theme.colors.GhostWhite : "#e4fafc"};
  color: ${({ isFreePlan, theme }) =>
    isFreePlan ? theme.colors.Grey400 : theme.colors.DarkText};
  border-radius: 29px;
  padding: 6px 0;
  width: 110px;
  text-align: center;
  box-sizing: border-box;
`;

export const GroupsPanel = styled.div<{ expanded: boolean }>`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  padding: 8px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 125%;
  text-align: center;
  color: ${({ theme }) => theme.colors.DarkText};
  margin: 32px 0;
`;

export const PlansHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  border: 1px solid #e5f4f5;

  @media (min-width: 768px) {
    padding-left: 300px;
    border-radius: 12px 12px 0 0;
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
    padding-right: 20px;
    border-left: none;
    border-right: none;
  }

  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.Blue100};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.DarkText};
`;

export const PlansHeaderSelect = styled.select`
  border: none;
  background-color: transparent;
  font-size: inherit;
  font-weight: inherit;
  outline: none;
  width: 50%;
  text-align: right;
  padding-right: 20px;
`;

export const PlansHeaderItem = styled.div`
  flex: 1;
  text-align: center;
`;

export const ShowAvailableExchangeLink = styled.a`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-decoration-line: underline;
  :hover {
    text-decoration-line: none;
  }
  color: ${({ theme }) => theme.colors.Primary};
  cursor: pointer;
  padding: 30px;
  border: 1px solid #e5f4f5;
  border-top: none;
  border-radius: 0 0 12px 12px;
`;
