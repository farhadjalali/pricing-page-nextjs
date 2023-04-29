import { PricePlan, type CompareFeature, type I18n } from "@/types";
import {
  Component,
  FeatureCompareItem,
  FeatureCompareItemBorder,
  FeatureGroup,
  FeatureGroupTitle,
  FeatureGroupTitleWrapper,
  FeatureRow,
  FeatureTitle,
  FeaturesWrapper,
  GroupsPanel,
  PlansHeader,
  PlansHeaderItem,
  Title,
} from "./style";
import { SvgDown } from "@/assets/SvgDown";
import { useState } from "react";
import { PlanFeature } from "@/types/PlanFeature";
import { SvgNo } from "@/assets/SvgNo";
import { SvgYes } from "@/assets/SvgYes";

type Props = {
  $t: I18n;
  compareFeatures: CompareFeature[];
  plans: PricePlan[];
};

export const FeaturesTable: React.FC<Props> = ({
  compareFeatures,
  $t,
  plans,
}) => {
  const [expands, setExpands] = useState<{ [index: string]: boolean }>({});

  function toggleExpandGroup(featureGroup: CompareFeature) {
    setExpands({
      ...expands,
      [featureGroup.index]: !expands[featureGroup.index],
    });
  }

  const FeatureCompare: React.FC<{ plan: any; feature: PlanFeature }> = ({
    plan,
    feature,
  }) => {
    const value = (feature.compare || [])[plan.index];
    return (
      <FeatureCompareItem key={plan.index}>
        {!value ? (
          <SvgNo />
        ) : value == "Y" ? (
          <SvgYes />
        ) : (
          <FeatureCompareItemBorder>{value}</FeatureCompareItemBorder>
        )}
      </FeatureCompareItem>
    );
  };

  return (
    <Component>
      <Title>{$t["price.features.title"]}</Title>

      <PlansHeader>
        {plans.map((plan) => (
          <PlansHeaderItem key={plan.index}>{plan.title}</PlansHeaderItem>
        ))}
      </PlansHeader>

      <FeaturesWrapper>
        {compareFeatures.map((featureGroup) => (
          <FeatureGroup key={featureGroup.index}>
            <FeatureGroupTitleWrapper
              onClick={() => toggleExpandGroup(featureGroup)}
            >
              <FeatureGroupTitle>{featureGroup.group}</FeatureGroupTitle>
              <SvgDown />
            </FeatureGroupTitleWrapper>

            <GroupsPanel expanded={expands[featureGroup.index]}>
              {featureGroup.features.map((feature) => (
                <FeatureRow key={feature.title}>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  {plans.map((plan) => (
                    <FeatureCompare
                      key={plan.index}
                      feature={feature}
                      plan={plan}
                    />
                  ))}
                </FeatureRow>
              ))}
            </GroupsPanel>
          </FeatureGroup>
        ))}
      </FeaturesWrapper>
    </Component>
  );
};
