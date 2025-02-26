import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="content-container">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
