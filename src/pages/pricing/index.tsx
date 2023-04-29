import { cmsClient, getLocalizedTexts } from "@/utils";
import {
  FeaturesTitle,
  Main,
  PageTitle,
  PaymentTypeButton,
  PaymentTypeWrapper,
  PricingClarification,
} from "./style";
import Head from "next/head";
import { PricingPlans } from "@/components/pricing-plans/PricingPlans";
import { FeaturesTable } from "@/components/features-table/FeaturesTable";
import assert from "assert";
import { NextPageContext } from "next";
import { I18n, PricePlan } from "@/types";

type Props = {
  plans: PricePlan[];
  compareFeatures: any[];
  $t: I18n;
  page: {
    title: string;
    description: string;
    keywords: string;
  };
};

const PricingPage: React.FC<Props> = ({ plans, compareFeatures, page, $t }) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="keywords" content={page.keywords} />
      </Head>

      <Main>
        <PageTitle>{$t["page.pricing.title"]}</PageTitle>
        <PaymentTypeWrapper>
          <PaymentTypeButton selected>
            {$t["plan.payment.type.annually"]}
          </PaymentTypeButton>

          <PaymentTypeButton>
            {$t["plan.payment.type.monthly"]}
          </PaymentTypeButton>
        </PaymentTypeWrapper>

        <PricingPlans plans={plans} $t={$t} />

        <PricingClarification>
          {$t["pricing.clarification"]}
        </PricingClarification>

        <FeaturesTitle>{$t["price.features.title"]}</FeaturesTitle>

        <FeaturesTable compareFeatures={compareFeatures} />
      </Main>
    </>
  );
};

export default PricingPage;

export async function getStaticProps({ locale }: NextPageContext) {
  const $t = await getLocalizedTexts(locale);

  const [page] = await cmsClient.fetch(`*[_type == "page-meta" && name == "pricing" && locale == "${locale}"]`); // prettier-ignore
  assert(page, "Page meta data not found in CMS!");

  const plans = await cmsClient.fetch(`*[_type == "price-plan"]`);
  assert(plans, "Plans not found in CMS!");

  const compareFeatures = await cmsClient.fetch(`*[_type == "compare-feature"]`); // prettier-ignore
  assert(compareFeatures, "Compare features not found in CMS!");

  return {
    props: { compareFeatures, plans, page, $t },
  };
}
