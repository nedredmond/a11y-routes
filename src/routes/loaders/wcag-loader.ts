import { redirect } from "react-router-dom";
import type { WcagItem } from "../../types";
import { parse } from "../../utils";

const baseRedirectUrl = "https://www.w3.org/TR/WCAG22/" as const;

export default (item?: WcagItem) =>
  item
    ? redirect(`${baseRedirectUrl}#${parse(item.id)}`)
    : redirect(baseRedirectUrl);
