import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Blogview from "../../features/blog/Blogview";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="mt-1 container mx-auto">
        <Blogview />
        <Footer />
      </div>
    </>
  );
};

export default Home;
