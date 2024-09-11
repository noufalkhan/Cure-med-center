import React from "react";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import CategorySection from "./components/CategorySection";

const page = () => {
  return (
    <div className=" h-auto container mx-auto px-2 lg:px-20  mt-5 ">
      <HeroSection />
      <CategorySection />
    </div>
  );
};

export default page;
