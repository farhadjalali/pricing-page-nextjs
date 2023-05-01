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
} from "./style";
import { DropdownDownArrow } from "@/assets/DropdownDownArrow";
import { useState } from "react";
import { PlanFeature } from "@/types/PlanFeature";
import { CheckNoIcon } from "@/assets/CheckNoIcon";
import { CheckYesIcon } from "@/assets/CheckYesIcon";
import { QuestionMark } from "@/assets/QuestionMark";
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

  function getFeatureTooltipId(
    featureGroup: CompareFeature,
    feature: PlanFeature
  ) {
    return `feature-${featureGroup.index}-${feature.title.replace(/ /g, "-")}`;
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
                {!!featureGroup.comment && <QuestionMark />}
              </FeatureGroupTitle>
              <DropdownDownArrow up={groupExpands[featureGroup.index]} />
            </FeatureGroupTitleWrapper>

            <GroupsPanel expanded={groupExpands[featureGroup.index]}>
              {featureGroup.features.map((feature) => (
                <FeatureRow key={feature.title}>
                  <FeatureTitle>
                    {feature.title}
                    {!!feature.comment && (
                      <>
                        <QuestionMark
                          data-tooltip-id={getFeatureTooltipId(
                            featureGroup,
                            feature
                          )}
                          data-tooltip-content={feature.comment}
                        />
                        <Tooltip
                          style={{
                            backgroundColor: "white",
                            color: "#666",
                            fontSize: "14px",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            border: "1px solid #E5E5E5",
                            position: "absolute",
                          }}
                          id={getFeatureTooltipId(featureGroup, feature)}
                        />
                      </>
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
