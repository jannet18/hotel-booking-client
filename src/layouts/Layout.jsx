import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
// import Register from "../pages/Register";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto py-10 flex-1"></div>
      <Footer />
    </div>
  );
}

export default Layout;
