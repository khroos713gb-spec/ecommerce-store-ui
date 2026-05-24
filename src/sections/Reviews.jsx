import Container from "../components/Container";

const Reviews = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">

      <Container>

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Customer Reviews
          </h2>

          <p className="text-slate-400 mt-4">
            Trusted by thousands of happy customers.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="font-bold mb-4">Sarah Johnson</h3>
            <p className="text-slate-400">
              Amazing quality products and fast delivery.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="font-bold mb-4">Michael Brown</h3>
            <p className="text-slate-400">
              Great shopping experience and premium design.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="font-bold mb-4">Emily Davis</h3>
            <p className="text-slate-400">
              My favorite online store. Highly recommended.
            </p>
          </div>

        </div>

      </Container>

    </section>
  );
};

export default Reviews;
