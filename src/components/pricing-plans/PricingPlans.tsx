import { I18n, PricePlan } from "@/types";
import {
  Headline,
  MonthlyComment,
  Plan,
  Component,
  Price,
  PriceWrapper,
  StartButton,
  Title,
} from "./style";

type Props = {
  $t: I18n;
  plans: PricePlan[];
};

export const PricingPlans: React.FC<Props> = ({ plans, $t }) => {
  const sortedPlans = plans.sort((p1, p2) => p1.index - p2.index);

  return (
    <Component>
      {sortedPlans.map(
        ({
          title,
          name,
          monthlyPrice,
          monthlyPriceComment,
          headline,
          benefits,
        }) => (
          <Plan key={name}>
            <Title>{title}</Title>

            <PriceWrapper>
              {monthlyPrice ? (
                <Price>${monthlyPrice}/month</Price>
              ) : (
                <Price>{$t["plan.free"]}</Price>
              )}
              <MonthlyComment>{monthlyPriceComment}</MonthlyComment>
            </PriceWrapper>

            <Headline>{headline}</Headline>

            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <StartButton>{$t["plan.get-started"]}</StartButton>
          </Plan>
        )
      )}
    </Component>
  );
};
