import type { RouteObject } from "react-router-dom";
import type { WcagItem, WcagResponseData } from "../types";
import { pathAliases } from "../types";
import { parse } from "../utils";
import loader from "./loaders/wcag-loader";

interface RouteFields {
  path: string;
  loader: () => Response;
}

export const wcagRoutes = (wcag: WcagResponseData) => {
  const routeFieldsMap = new Map<[WcagItem, keyof WcagItem], RouteFields>();

  const routeFields = (item: WcagItem, key: keyof WcagItem) => {
    const cached = routeFieldsMap.get([item, key]);
    if (cached) return cached;

    const route = {
      path: parse(item[key]),
      loader: () => loader(item),
    };

    routeFieldsMap.set([item, key], route);

    return route;
  };

  const childRoutes = wcag.principles
    .map((principle): RouteObject[] =>
      pathAliases.map((pKey) => ({
        ...routeFields(principle, pKey),
        children: principle.guidelines
          .map((guideline): RouteObject[] =>
            pathAliases.map((gKey) => ({
              ...routeFields(guideline, gKey),
              children: guideline.successcriteria
                .map((successcriterion): RouteObject[] =>
                  pathAliases.map((scKey) => ({
                    ...routeFields(successcriterion, scKey),
                  })),
                )
                .flat(),
            })),
          )
          .flat(),
      })),
    )
    .flat();

    const routesArray = Array.from(routeFieldsMap.entries());

    const flatRoutes = routesArray
      .filter(([[_, key]]) => key === "id")
      .map(([_, route]) => route);

  const nestedRoutes = [
    // TODO: Possibly add other spec versions here
    {
      path: "wcag22",
      loader: () => loader(),
      children: [
        ...childRoutes,
        ...flatRoutes,
      ],
    },
    // skipping version goes straight to latest
    {
      path: "wcag",
      loader: () => loader(),
      children: [
        ...childRoutes,
        ...flatRoutes,
      ],
    },
  ];

  return nestedRoutes;
};
