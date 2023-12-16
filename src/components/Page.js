import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Popup from "./Popup";

function Page() {
  return (
    <div className="page">
    <Header />
    <Main />
    <Footer />
    <Popup />
    </div>
  );
}

export default Page;