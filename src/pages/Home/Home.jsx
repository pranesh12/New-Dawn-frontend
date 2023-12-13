import Hero from "../../components/Hero/Hero";
import Blogview from "../../features/blog/Blogview";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="mt-1 container mx-auto">
        <Blogview />
      </div>
    </>
  );
};

export default Home;
