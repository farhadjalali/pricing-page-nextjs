import styled from "styled-components";

export const Component = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeaturesWrapper = styled.div`
  max-width: 1222px;
  width: 100%;
`;

export const FeatureGroup = styled.div``;

export const FeatureGroupTitleWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5f4f5;
`;

export const FeatureGroupTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1rem;
  color: #7a7998;
`;

export const FeatureRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const FeatureTitle = styled.h4`
  width: 300px;
`;

export const FeatureCompareItem = styled.div`
  flex: 1;
  text-align: center;
`;

export const FeatureCompareItemBorder = styled.div`
  display: inline;
  background: #e4fafc;
  border-radius: 29px;
  padding: 5px 20px;
`;

export const GroupsPanel = styled.div<{ expanded: boolean }>`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 125%;
  text-align: center;
  color: #0d0c43;
`;

export const PlansHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  padding-left: 300px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: #f7fdfd;
`;

export const PlansHeaderItem = styled.div`
  flex: 1;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  text-align: center;

  /* Main Dark Text */

  color: #0d0c43;
`;
