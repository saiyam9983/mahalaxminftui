import React from "react";
import Hero from "./Hero";
import LiveAuction from "./LiveAuction";
import NewestItems from "./NewestItems";
import ExploreProduct from "./ExploreProduct";

const Home = () => {
  return (
    <>
      <Hero />
      <LiveAuction />
      <NewestItems />
      <ExploreProduct />
    </>
  );
};

export default Home;
