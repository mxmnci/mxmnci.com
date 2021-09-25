import React from "react";

const Layout = (props) => {
  const { children } = props;
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">{children}</div>
    </main>
  );
};

export default Layout;
