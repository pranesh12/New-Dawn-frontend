import Hero from "../../components/Hero/Hero";
import NewsCard from "../../components/NewsCard/NewsCard";

const Home = () => {
  return (
    <div className="mt-1 container mx-auto">
      <Hero />
      <div className="mt-3">
        <NewsCard />
      </div>
    </div>
  );
};

export default Home;
