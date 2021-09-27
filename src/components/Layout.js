import React from "react";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
