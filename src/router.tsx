import React, { useEffect } from "react";
import type { RouteObject } from "react-router-dom";
import { RouterProvider, createHashRouter } from "react-router-dom";
import type { WcagResponseData } from "./types";
import { pathAliases } from "./types";
import { WcagContext } from "./contexts/wcag-context";
import loader from "./loaders/wcag-loader";
import { parse } from "./utils";
import { Text } from "./components/text";
import getWcag from "./w3c/wcag/get-wcag";

const wcagRoutes = (wcag: WcagResponseData): RouteObject[] => [
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

const router = (data: WcagResponseData) =>
  createHashRouter([
    {
      path: "/",
      element: (
        <Text>
          Add the spec to the URL like so: <code>/#/wcag2/1</code> to go to the
          first principal, or <code>/#/wcag2/1/1/1</code> to go to the first
          success criterion. <br /> You can also use the names of principles,
          guidelines, and criteria, like so:
          <code> /#/wcag2/robust/compatible/name-role-value</code>
        </Text>
      ),
    },
    ...wcagRoutes(data),
    {
      path: "/*",
      element: <Text>WCAG spec not found!</Text>,
    },
  ]);

const Router = () => {
  const data = React.useContext(WcagContext);
  useEffect(() => {
    getWcag().then((data) => {
      console.log(data);
    })
  }, []);
  return <RouterProvider router={router(data)} />;
};

export default Router;
