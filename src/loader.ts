import { redirect } from "react-router-dom";
import type { WcagItem } from "./types";
import { parse } from "./utils";

const baseRedirectUrl = "https://www.w3.org/TR/WCAG22/#" as const;

export default async (item: WcagItem) => {
  console.log({ item });
  const id = parse(item.id);
  return redirect(`${baseRedirectUrl}${id}`);
};
