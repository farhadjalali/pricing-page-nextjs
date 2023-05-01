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
  MobileChoosePlan,
  HelpMark,
  TooltipStyle,
} from "./style";
import { DropdownDownArrow } from "@/common/DropdownDownArrow";
import { useState } from "react";
import { PlanFeature } from "@/types/PlanFeature";
import { CheckNoIcon } from "../../common/CheckNoIcon";
import { CheckYesIcon } from "../../common/CheckYesIcon";
import { QuestionMark } from "../../common/QuestionMark";
import { Tooltip } from "react-tooltip";

type Props = {
  $t: I18n;
  features: CompareFeature[];
  plans: PricePlan[];
};

export const CompareFeatures: React.FC<Props> = ({ features, $t, plans }) => {
  const [selectedPlanOnMobile, setSelectedPlanOnMobile] = useState<string>("0");
  const [groupExpands, setGroupExpands] = useState<{
    [index: string]: boolean;
  }>({});

  function toggleExpandGroup(featureGroup: CompareFeature) {
    setGroupExpands({
      ...groupExpands,
      [featureGroup.index]: !groupExpands[featureGroup.index],
    });
  }

  function getFeatureTooltipId(group: CompareFeature, feature: PlanFeature) {
    return `feature-${group.index}-${feature.title.replace(/ /g, "-")}`;
  }

  function getFeatureGroupTooltipId(group: CompareFeature) {
    return `feature-${group.index}`;
  }

  const FeatureCompare: React.FC<{ plan: any; feature: PlanFeature }> = ({
    plan,
    feature,
  }) => {
    const value = (feature.compare || [])[plan.index];
    return (
      <FeatureCompareItem
        visibleOnMobile={selectedPlanOnMobile == plan.index}
        key={plan.index}
      >
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
      <Title>{$t["pricing.features.title"]}</Title>

      <MobileChoosePlan>
        {$t["pricing.choose-plan"]}:
        <PlansHeaderSelect
          onChange={(ev) => setSelectedPlanOnMobile(ev.target.value)}
        >
          {plans.map((plan) => (
            <option key={plan.index} value={plan.index}>
              {plan.title}
            </option>
          ))}
        </PlansHeaderSelect>
      </MobileChoosePlan>

      <PlansHeader>
        {plans.map((plan) => (
          <PlansHeaderItem key={plan.index}>{plan.title}</PlansHeaderItem>
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
                {!!featureGroup.comment && (
                  <HelpMark
                    data-tooltip-id={getFeatureGroupTooltipId(featureGroup)}
                    data-tooltip-content={featureGroup.comment}
                  >
                    <QuestionMark />
                    <Tooltip
                      style={TooltipStyle}
                      id={getFeatureGroupTooltipId(featureGroup)}
                    />
                  </HelpMark>
                )}
              </FeatureGroupTitle>
              <DropdownDownArrow up={groupExpands[featureGroup.index]} />
            </FeatureGroupTitleWrapper>

            <GroupsPanel expanded={groupExpands[featureGroup.index]}>
              {featureGroup.features.map((feature) => (
                <FeatureRow key={feature.title}>
                  <FeatureTitle>
                    {feature.title}
                    {!!feature.comment && (
                      <HelpMark
                        data-tooltip-id={getFeatureTooltipId(
                          featureGroup,
                          feature
                        )}
                        data-tooltip-content={feature.comment}
                      >
                        <QuestionMark />
                        <Tooltip
                          style={TooltipStyle}
                          id={getFeatureTooltipId(featureGroup, feature)}
                        />
                      </HelpMark>
                    )}
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
