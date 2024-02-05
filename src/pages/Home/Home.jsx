import React from "react";
import Header from "../../components/Header/Header";
import FirstPage from "../../components/FirstPage/FirstPage";
import SecondPage from "../../components/SecondPage/SecondPage";
import ThirdPage from "../../components/thirdPage/thirdPage";
import FourthPage from "../../components/FourthPage/FourthPage";

export default function Home() {
  return (
    <div>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </div>
  );
}
