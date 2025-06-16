import BrandLogos from "../BrandLogos";
import Features from "./Features";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Wishlist from "./Wishlist";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Wishlist />
      <BrandLogos />
      <Newsletter />
    </>
  );
};

export default Home;
