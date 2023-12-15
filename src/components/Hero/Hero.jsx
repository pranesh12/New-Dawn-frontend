import heroImg from "../../assets/heroBg.jpg";
const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          height: "vh",
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to New Dawn</h1>
            <p className="mb-5 text-justify">
              Welcome to New Dawn Blog, where inspiration meets information in
              every sunrise of knowledge. Immerse yourself in a world of
              captivating articles that explore the latest trends, share
              insightful perspectives, and ignite your curiosity.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
