import React from "react";
import Header from "../Header/Header";

import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default SharedLayout;
