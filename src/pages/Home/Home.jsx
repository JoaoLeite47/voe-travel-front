import React from "react";
import Header from "../../components/Header/Header";
import FirstPage from "../../components/FirstPage/FirstPage";
import SecondPage from "../../components/SecondPage/SecondPage";
import ThirdPage from "../../components/thirdPage/thirdPage";
import FourthPage from "../../components/FourthPage/FourthPage";
import FifthPage from "../../components/FifthPage/FifthPage";
import SixthPage from "../../components/SixthPage/SixthPage";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <Footer />
    </div>
  );
}
