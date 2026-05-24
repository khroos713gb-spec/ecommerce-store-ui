import Container from "../components/Container";

const Newsletter = () => {
  return (
    <section className="py-24 bg-black text-white">

      <Container>

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Join Our Newsletter
          </h2>

          <p className="text-slate-400 mb-8">
            Get updates on new products and exclusive offers.
          </p>

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-4 rounded-xl bg-slate-900 border border-slate-800"
            />

            <button className="px-8 py-4 bg-orange-500 rounded-xl font-semibold">
              Subscribe
            </button>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Newsletter;
