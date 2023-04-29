import assert from "assert";
import { cmsClient } from "./cmsClient";

export async function getLocalizedTexts(locale: string | undefined = "en-US") {
  const allTexts = await cmsClient.fetch(`*[_type == "texts"]`);
  assert(allTexts, "Texts not found in cms!");

  const [lang] = locale.split("-");

  const texts: { [key: string]: string } = {};
  allTexts.forEach((item: any) => {
    texts[item.key] = item[lang] || item.en;
  });

  return texts;
}
