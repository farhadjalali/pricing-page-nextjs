import { cmsClient } from "@/utils/cmsClient";
import { getLocalizedTexts } from "@/utils/getLocalizedTexts";
import { Page, PageTitle } from "./style";
import Head from "next/head";
import { PricingPlans } from "@/components/pricing-plans/PricingPlans";
import { CompareFeatures } from "@/components/compare-features/CompareFeatures";
import assert from "assert";
import { NextPageContext } from "next";
import { type PageMeta, type I18n, type PricePlan } from "@/types";
import { Header } from "@/components/header/Header";
import { getMainMenu } from "@/utils/getMainMenu";
import { MainMenu } from "@/types/MainMenu";

type Props = {
  plans: PricePlan[];
  features: any[];
  $t: I18n;
  page: PageMeta;
  menu: MainMenu[];
};

const PricingPage: React.FC<Props> = ({ plans, features, page, $t, menu }) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="keywords" content={page.keywords} />
      </Head>

      <Page>
        <Header menu={menu} $t={$t} />

        <PageTitle>{$t["page.pricing.title"]}</PageTitle>

        <PricingPlans plans={plans} $t={$t} />

        <CompareFeatures $t={$t} features={features} plans={plans} />
      </Page>
    </>
  );
};

export default PricingPage;

export async function getStaticProps({ locale }: NextPageContext) {
  const $t = await getLocalizedTexts(locale);
  const menu = await getMainMenu();

  const [page] = await cmsClient.fetch(`*[_type == "page-meta" && name == "pricing" && locale == "${locale}"]`); // prettier-ignore
  assert(page, "Page meta data not found in CMS!");

  const plans = await cmsClient.fetch(`*[_type == "price-plan"] | order(index asc)`); // prettier-ignore
  assert(plans, "Plans not found in CMS!");

  const features = await cmsClient.fetch(`*[_type == "compare-feature"]  | order(index asc)`); // prettier-ignore
  assert(features, "Compare features not found in CMS!");

  return {
    props: { features, plans, page, $t, menu },
  };
}
