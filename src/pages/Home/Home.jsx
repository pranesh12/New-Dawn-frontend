import Hero from "../../components/Hero/Hero";
import NewsCard from "../../components/NewsCard/NewsCard";
import data from "../../dummydata/dummy.json";

const Home = () => {
  console.log(data);
  return (
    <div className="mt-1 container mx-auto">
      <Hero />
      <div className="flex flex-wrap justify-center mt-10 lg:Space between">
        {data.map((blog) => {
          return <NewsCard key={blog.key} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Home;
