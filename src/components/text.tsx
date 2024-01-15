import React from "react";

export const Text = ({ children }: React.PropsWithChildren) => (
  <span
    style={{
      fontSize: "large",
    }}
  >
    {children}
  </span>
);
