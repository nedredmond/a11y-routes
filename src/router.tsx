import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import type { WcagResponseData } from "./types";
import { WcagContext } from "./contexts/wcag-context";
import { Text } from "./components/text";
import { wcagRoutes } from "./routes/wcag-routes";
import { LandingMessage } from "./components/landing";

const router = (data: WcagResponseData) =>
  createHashRouter([
    {
      path: "/",
      element: <LandingMessage />,
    },
    ...wcagRoutes(data),
    {
      path: "/*",
      element: <Text>Route not found!</Text>,
    },
  ]);

const Router = () => {
  const wcag = React.useContext(WcagContext);
  return <RouterProvider router={router(wcag)} />;
};

export default Router;
