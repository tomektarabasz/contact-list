import React from "react";
import { LeftColumn } from "../left-column/left-column";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="App">
      <LeftColumn />
      <div className="list">{children}</div>
    </div>
  );
};
