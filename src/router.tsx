import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import type { WcagResponseData } from "./types";
import { WcagContext } from "./contexts/wcag-context";
import { Text } from "./components/text";
import { wcagRoutes } from "./routes/wcag-routes";

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
      element: <Text>Route not found!</Text>,
    },
  ]);

const Router = () => {
  const wcag = React.useContext(WcagContext);
  return <RouterProvider router={router(wcag)} />;
};

export default Router;
