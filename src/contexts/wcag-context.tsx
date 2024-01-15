import React, { useState, useEffect } from "react";
import type { WcagResponseData } from "../types";
import getWcag from "../w3c/wcag/get-wcag";
import wcag22 from "../w3c/wcag/wcag22.json";

export const WcagContext = React.createContext<WcagResponseData>(wcag22);

/**
 * Asynchronously fetches WCAG data and provides it to the app.
 * While loading or if an error occurs, the app will use the static data.
 */
export const WcagContextProvider = ({ children }: React.PropsWithChildren) => {
  const [data, setData] = useState<WcagResponseData>(wcag22);

  useEffect(() => {
    void getWcag().then(setData);
  }, []);

  return <WcagContext.Provider value={data}>{children}</WcagContext.Provider>;
};
