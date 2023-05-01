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
import Image from "next/image";

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
                  {!!monthlyPrice && (
                    <Image
                      src="/images/price-headline-arrow.svg"
                      alt="Price headline arrow"
                      width={24}
                      height={16}
                    />
                  )}
                </Headline>

                <BenefitsList>
                  {benefits.map((benefit) => (
                    <BenefitsListItem key={benefit}>{benefit}</BenefitsListItem>
                  ))}
                </BenefitsList>
                <StartButton>{$t["pricing.get-started"]}</StartButton>
              </BenefitsWrapper>

              <WhatsIncluded>
                {$t["pricing.whats-included"]}{" "}
                <Image
                  src="/images/dropdown-arrow.svg"
                  alt="Dropdown arrow"
                  width={10}
                  height={8}
                />
              </WhatsIncluded>
            </Card>
          )
        )}
      </Component>
      <PricingClarification>{$t["pricing.clarification"]}</PricingClarification>
    </>
  );
};
