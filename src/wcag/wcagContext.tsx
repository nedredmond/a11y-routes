import React, { useState, useEffect } from "react";
import getWcag from "./getWcag";
import type { WcagResponseData } from "../types";

interface ContextData {
  loading: boolean;
  data: WcagResponseData | null;
}

export const WcagContext = React.createContext<ContextData>({
  loading: true,
  data: null,
});

export const WcagContextProvider = ({ children }: React.PropsWithChildren) => {
  const [data, setData] = useState<WcagResponseData | null>(null);
  const [loading, setLoading] = useState(true);

  const getAffiliates = async () => {
    const wcagData = await getWcag();
    setData(wcagData);
    setLoading(false);
  };

  useEffect(() => {
    getAffiliates();
  }, []);

  return (
    <WcagContext.Provider value={{ loading, data }}>
      {children}
    </WcagContext.Provider>
  );
};
