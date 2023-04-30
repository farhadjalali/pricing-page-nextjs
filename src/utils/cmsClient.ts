import { createClient } from "next-sanity";

export const cmsClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "jp0od8zg",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
