import React from "react";
import type { RouteObject } from "react-router-dom";
import { RouterProvider, createHashRouter } from "react-router-dom";
import type { WcagResponseData } from "./types";
import { pathAliases } from "./types";
import { WcagContext } from "./wcag/wcagContext";
import loader from "./loader";
import { parse } from "./utils";
import { Text } from "./components/text";

const wcagRoutes = (wcag: WcagResponseData) => {
  console.log({ wcag });
  return wcag.principles
    .map((principle): RouteObject[] =>
      pathAliases.map((pKey) => ({
        path: `/${parse(principle[pKey])}`,
        loader: () => loader(principle),
        children: principle.guidelines
          .map((guideline): RouteObject[] =>
            pathAliases.map((gKey) => ({
              path: `/${parse(principle[pKey])}/${parse(guideline[gKey])}`,
              loader: () => loader(guideline),
              children: guideline.successcriteria
                .map((successcriterion): RouteObject[] =>
                  pathAliases.map((scKey) => ({
                    path: `/${parse(principle[pKey])}/${parse(
                      guideline[gKey],
                    )}/${parse(successcriterion[scKey])}`,
                    loader: () => loader(successcriterion),
                  })),
                )
                .flat(),
            })),
          )
          .flat(),
      })),
    )
    .flat();
};

const router = (data: WcagResponseData) =>
  createHashRouter([
    {
      path: "/",
      element: <Text>Search will go here!</Text>,
    },
    ...wcagRoutes(data),
    {
      path: "/*",
      element: <Text>WCAG spec not found!</Text>,
    },
  ]);

const Router = () => (
  <WcagContext.Consumer>
    {({ loading, data }) => {
      if (loading) {
        return <Text>Loading WCAG spec...</Text>;
      }
      if (!data) {
        return <Text>Something went wrong!</Text>;
      }
      return <RouterProvider router={router(data)} />;
    }}
  </WcagContext.Consumer>
);

export default Router;
