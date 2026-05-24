import Container from "../components/Container";
import HeroLogo from "../components/HeroLogo";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white pt-24 overflow-hidden">

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          <div>

            <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400">
              New Collection 2026
            </span>

            <h1 className="text-7xl font-bold mt-8 leading-tight">
              Shop The Latest
              <span className="block text-orange-500">
                Fashion Trends
              </span>
            </h1>

            <p className="text-slate-400 mt-6 text-xl max-w-xl">
              Discover premium products with modern style,
              fast shipping and unbeatable quality.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="px-8 py-4 bg-orange-500 rounded-xl font-semibold">
                Shop Now
              </button>

              <button className="px-8 py-4 border border-slate-700 rounded-xl">
                View Collection
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-14">
              <div>
                <h3 className="text-4xl font-bold text-orange-500">50K+</h3>
                <p className="text-slate-400">Customers</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-orange-500">10K+</h3>
                <p className="text-slate-400">Products</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-orange-500">4.9</h3>
                <p className="text-slate-400">Rating</p>
              </div>
            </div>

          </div>

          <HeroLogo />

        </div>

      </Container>

    </section>
  );
};

export default Hero;
