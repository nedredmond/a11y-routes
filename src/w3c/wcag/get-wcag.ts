import type { WcagResponseData } from "../../types";

export default async (): Promise<WcagResponseData> =>
  await fetch(
    "https://raw.githubusercontent.com/w3c/wcag/main/guidelines/wcag.json",
  ).then(async (res) => {
    if (res.ok) {
      return res.json() as Promise<WcagResponseData>;
    }
    return Promise.reject(new Error("Failed to fetch WCAG data"));
  });
