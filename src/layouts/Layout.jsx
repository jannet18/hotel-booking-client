import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Search from "../pages/Search";
import Home from "../pages/Home";
// import Register from "../pages/Register";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
