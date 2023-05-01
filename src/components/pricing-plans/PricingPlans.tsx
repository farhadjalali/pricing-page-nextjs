import { I18n, PricePlan } from "@/types";
import {
  Headline,
  MonthlyComment,
  Card,
  Component,
  Price,
  PriceWrapper,
  StartButton,
  CardTitle,
  BgGradientRight,
  BgGradientLeft,
  TopHint,
  PriceMonthPhrase,
  BenefitsWrapper,
  BenefitsList,
  BenefitsListItem,
  PricingClarification,
  PaymentTypeButton,
  PaymentTypeWrapper,
  WhatsIncluded,
} from "./style";
import { PriceHeadlineArrow } from "@/components/pricing-plans/PriceHeadlineArrow";
import { DropdownDownArrow } from "@/common/DropdownDownArrow";
import { isMobile } from "react-device-detect";

type Props = {
  $t: I18n;
  plans: PricePlan[];
};

export const PricingPlans: React.FC<Props> = ({ plans, $t }) => {
  return (
    <>
      <PaymentTypeWrapper>
        <PaymentTypeButton selected>
          {$t["pricing.payment-annually"]}
        </PaymentTypeButton>

        <PaymentTypeButton>{$t["pricing.payment-monthly"]}</PaymentTypeButton>
      </PaymentTypeWrapper>

      <Component>
        <BgGradientRight />
        <BgGradientLeft />
        {plans.map(
          ({
            title,
            name,
            monthlyPrice,
            monthlyPriceComment,
            headline,
            benefits,
            topHint,
          }) => (
            <Card key={name} hasTopHint={!!topHint}>
              {topHint && <TopHint>{topHint}</TopHint>}

              <CardTitle>{title}</CardTitle>

              <PriceWrapper>
                {monthlyPrice ? (
                  <Price>
                    ${monthlyPrice}{" "}
                    <PriceMonthPhrase> /{$t["pricing.month"]}</PriceMonthPhrase>
                  </Price>
                ) : (
                  <Price>{$t["pricing.free"]}</Price>
                )}
                <MonthlyComment>{monthlyPriceComment}</MonthlyComment>
              </PriceWrapper>

              <BenefitsWrapper>
                <Headline>
                  {headline}
                  {!!monthlyPrice && <PriceHeadlineArrow />}
                </Headline>

                <BenefitsList>
                  {benefits.map((benefit) => (
                    <BenefitsListItem key={benefit}>{benefit}</BenefitsListItem>
                  ))}
                </BenefitsList>
                <StartButton>{$t["pricing.get-started"]}</StartButton>
              </BenefitsWrapper>

              <WhatsIncluded>
                {$t["pricing.whats-included"]} <DropdownDownArrow />
              </WhatsIncluded>
            </Card>
          )
        )}
      </Component>
      <PricingClarification>{$t["pricing.clarification"]}</PricingClarification>
    </>
  );
};
