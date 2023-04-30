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
import { DropdownDownArrow } from "@/assets/DropdownDownArrow";
import { useState } from "react";
import { PlanFeature } from "@/types/PlanFeature";
import { CheckNoIcon } from "@/assets/CheckNoIcon";
import { CheckYesIcon } from "@/assets/CheckYesIcon";
import { QuestionMark } from "@/assets/QuestionMark";

type Props = {
  $t: I18n;
  features: CompareFeature[];
  plans: PricePlan[];
};

export const CompareFeatures: React.FC<Props> = ({
  features: compareFeatures,
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
          <CheckNoIcon />
        ) : value == "Y" ? (
          <CheckYesIcon />
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
              <FeatureGroupTitle>
                {featureGroup.group}
                {!!featureGroup.comment && <QuestionMark />}
              </FeatureGroupTitle>
              <DropdownDownArrow />
            </FeatureGroupTitleWrapper>

            <GroupsPanel expanded={expands[featureGroup.index]}>
              {featureGroup.features.map((feature) => (
                <FeatureRow key={feature.title}>
                  <FeatureTitle>
                    {feature.title}
                    {!!feature.comment && <QuestionMark />}
                  </FeatureTitle>
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
