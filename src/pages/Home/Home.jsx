import { Suspense, lazy } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Spinner from "../../components/Spinner/Spinner";

const Blog = lazy(() => import("../../features/blog/Blogview"));

const Home = () => {
  return (
    <>
      <Hero />
      <div className="mt-1 container mx-auto">
        <Suspense
          fallback={
            <div>
              <Spinner />{" "}
            </div>
          }
        >
          <Blog />
        </Suspense>

        <Footer />
      </div>
    </>
  );
};

export default Home;
