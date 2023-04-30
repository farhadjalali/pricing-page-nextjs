import assert from "assert";
import { cmsClient } from "./cmsClient";

export async function getMainMenu() {
  const menu = await cmsClient.fetch(`*[_type == "main-menu"] | order(index asc)`); // prettier-ignore
  assert(menu, "Main menu not found in CMS!");
  return menu;
}
