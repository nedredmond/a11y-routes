import type { RouteObject } from "react-router-dom";
import type { WcagResponseData } from "../types";
import { pathAliases } from "../types";
import { parse } from "../utils";
import loader from "./loaders/wcag-loader";

export const wcagRoutes = (wcag: WcagResponseData): RouteObject[] => [
  {
    path: "wcag2",
    loader: () => loader(),
    children: [
      ...wcag.principles
        .map((principle): RouteObject[] =>
          pathAliases.map((pKey) => ({
            path: `${parse(principle[pKey])}`,
            loader: () => loader(principle),
            children: principle.guidelines
              .map((guideline): RouteObject[] =>
                pathAliases.map((gKey) => ({
                  path: `${parse(guideline[gKey])}`,
                  loader: () => loader(guideline),
                  children: guideline.successcriteria
                    .map((successcriterion): RouteObject[] =>
                      pathAliases.map((scKey) => ({
                        path: `${parse(successcriterion[scKey])}`,
                        loader: () => loader(successcriterion),
                      })),
                    )
                    .flat(),
                })),
              )
              .flat(),
          })),
        )
        .flat(),
    ],
  },
];
