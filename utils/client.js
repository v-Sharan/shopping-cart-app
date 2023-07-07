import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Constants from "expo-constants";

export const client = createClient({
  projectId: Constants.expoConfig.extra.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
