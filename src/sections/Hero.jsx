import Container from "../components/Container";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <Container>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

          <div>
            <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400">
              New Collection 2026
            </span>

            <h1 className="text-6xl font-bold mt-6 leading-tight">
              Shop The Latest
              <span className="text-orange-500"> Fashion </span>
              Trends
            </h1>

            <p className="text-slate-400 mt-6 text-lg">
              Discover premium products with modern style and unbeatable quality.
            </p>

            <button className="mt-8 px-8 py-4 bg-orange-500 rounded-xl font-semibold">
              Shop Now
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl h-[500px]"></div>

        </div>

      </Container>
    </section>
  );
};

export default Hero;
