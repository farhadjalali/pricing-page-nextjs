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
} from "./style";
import { PriceHeadlineArrow } from "@/assets/PriceHeadlineArrow";

type Props = {
  $t: I18n;
  plans: PricePlan[];
};

export const PricingPlans: React.FC<Props> = ({ plans, $t }) => {
  return (
    <>
      <PaymentTypeWrapper>
        <PaymentTypeButton selected>
          {$t["plan.payment.type.annually"]}
        </PaymentTypeButton>

        <PaymentTypeButton>{$t["plan.payment.type.monthly"]}</PaymentTypeButton>
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
                    <PriceMonthPhrase> /{$t["plan.month"]}</PriceMonthPhrase>
                  </Price>
                ) : (
                  <Price>{$t["plan.free"]}</Price>
                )}
                <MonthlyComment>{monthlyPriceComment}</MonthlyComment>
              </PriceWrapper>

              <BenefitsWrapper>
                <Headline>
                  <span>{headline}</span>
                  {!!monthlyPrice && <PriceHeadlineArrow />}
                </Headline>

                <BenefitsList>
                  {benefits.map((benefit) => (
                    <BenefitsListItem key={benefit}>{benefit}</BenefitsListItem>
                  ))}
                </BenefitsList>
                <StartButton>{$t["plan.get-started"]}</StartButton>
              </BenefitsWrapper>
            </Card>
          )
        )}
      </Component>
      <PricingClarification>{$t["pricing.clarification"]}</PricingClarification>
    </>
  );
};
