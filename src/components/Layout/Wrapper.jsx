import React from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

const Wrapper = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
