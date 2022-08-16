import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/router";
import { LoadingAnimation } from "./ui/LoadingAnimation/LoadingAnimation";

ReactDOM.render(
  <Suspense fallback={<LoadingAnimation />}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Suspense>,
  document.querySelector(".root")
);
