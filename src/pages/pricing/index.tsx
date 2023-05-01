import { cmsClient } from "@/utils/cmsClient";
import { getLocalizedTexts } from "@/utils/getLocalizedTexts";
import Head from "next/head";
import { PricingPlans } from "@/components/pricing-plans/PricingPlans";
import { CompareFeatures } from "@/components/compare-features/CompareFeatures";
import assert from "assert";
import { NextPageContext } from "next";
import {
  type PageMeta,
  type I18n,
  type PricePlan,
  CompareFeature,
} from "@/types";
import { Header } from "@/components/header/Header";
import { getMainMenu } from "@/utils/getMainMenu";
import { MainMenu } from "@/types/MainMenu";
import styled from "styled-components";

type Props = {
  plans: PricePlan[];
  features: CompareFeature[];
  $t: I18n;
  page: PageMeta;
  menu: MainMenu[];
};

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
`;

const PageTitle = styled.h1`
  font-weight: bold;
  font-size: 72px;
  line-height: 105%;
  text-align: center;
  color: ${({ theme }) => theme.colors.DarkText};
  padding: 56px 0 32px 0;
  margin: 0;

  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
  }
`;

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
