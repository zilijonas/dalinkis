import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { RecoilRoot } from "recoil";
import { SearchInfo } from "./components/SearchInfo";
import { NavBar } from "./components/nav-bar/NavBar";
import { theme } from "./theme";

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <NavBar />
        <SearchInfo />
      </ThemeProvider>
    </RecoilRoot>
  );
};
