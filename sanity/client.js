import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8lr1d42l",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});