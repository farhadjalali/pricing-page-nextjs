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
  PlansHeaderSelect,
  PlansHeader,
  PlansHeaderItem,
  ShowAvailableExchangeLink,
  Title,
} from "./style";
import { DropdownDownArrow } from "@/assets/DropdownDownArrow";
import { useState } from "react";
import { PlanFeature } from "@/types/PlanFeature";
import { CheckNoIcon } from "@/assets/CheckNoIcon";
import { CheckYesIcon } from "@/assets/CheckYesIcon";
import { QuestionMark } from "@/assets/QuestionMark";
import { isMobile } from "react-device-detect";

type Props = {
  $t: I18n;
  features: CompareFeature[];
  plans: PricePlan[];
};

export const CompareFeatures: React.FC<Props> = ({ features, $t, plans }) => {
  const [groupExpands, setGroupExpands] = useState<{
    [index: string]: boolean;
  }>({});

  function toggleExpandGroup(featureGroup: CompareFeature) {
    setGroupExpands({
      ...groupExpands,
      [featureGroup.index]: !groupExpands[featureGroup.index],
    });
  }

  const FeatureCompare: React.FC<{ plan: any; feature: PlanFeature }> = ({
    plan,
    feature,
  }) => {
    const value = (feature.compare || [])[plan.index];
    return (
      <FeatureCompareItem data-plan-column={plan.index} key={plan.index}>
        {!value ? (
          <CheckNoIcon />
        ) : value == "Y" ? (
          <CheckYesIcon />
        ) : (
          <FeatureCompareItemBorder isFreePlan={plan.index == 0}>
            {value}
          </FeatureCompareItemBorder>
        )}
      </FeatureCompareItem>
    );
  };

  return (
    <Component>
      <Title>{$t["price.features.title"]}</Title>

      {isMobile && (
        <div>
          Choose plan:{" "}
          <PlansHeaderSelect>
            {plans.map((plan) => (
              <option key={plan.index}>{plan.title}</option>
            ))}
          </PlansHeaderSelect>
        </div>
      )}

      <PlansHeader>
        {plans.map((plan) => (
          <PlansHeaderItem data-plan-column={plan.index} key={plan.index}>
            {plan.title}
          </PlansHeaderItem>
        ))}
      </PlansHeader>

      <FeaturesWrapper>
        {features.map((featureGroup) => (
          <FeatureGroup key={featureGroup.index}>
            <FeatureGroupTitleWrapper
              onClick={() => toggleExpandGroup(featureGroup)}
            >
              <FeatureGroupTitle expanded={groupExpands[featureGroup.index]}>
                {featureGroup.group}
                {!!featureGroup.comment && <QuestionMark />}
              </FeatureGroupTitle>
              <DropdownDownArrow />
            </FeatureGroupTitleWrapper>

            <GroupsPanel expanded={groupExpands[featureGroup.index]}>
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

      <ShowAvailableExchangeLink>
        {$t["pricing.features.show-available-exchange"]}
      </ShowAvailableExchangeLink>
    </Component>
  );
};
