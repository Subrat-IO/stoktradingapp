import React from "react";
import Hero from "./hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="/media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite.zerodha.com/demo"
        learnMore="https://kite.zerodha.com/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1449453802"
      />

      <RightSection
        imageURL="/media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://console.zerodha.com/"
      />

      <LeftSection
        imageURL="/media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://kite.zerodha.com/demo"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/zerodha-coin/id1345685497"
      />

      <RightSection
        imageURL="/media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super-simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base."
        learnMore="https://kite.trade/"
      />

      <LeftSection
        imageURL="/media/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy-to-grasp collection of stock market lessons broken down into bite-size cards to help you learn on the go."
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity/id1508396276"
      />

      <Universe />
    </>
  );
}

export default ProductPage;
