import Hero from "../../components/Hero/Hero";
import Blogview from "../../features/blog/Blogview";

const Home = () => {
  return (
    <div className="mt-1 container mx-auto">
      <Hero />
      <Blogview />
    </div>
  );
};

export default Home;
