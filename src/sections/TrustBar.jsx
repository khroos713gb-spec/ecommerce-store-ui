import Container from "../components/Container";

const TrustBar = () => {
  return (
    <section className="bg-black py-10 border-y border-slate-800">

      <Container>

        <div className="grid md:grid-cols-4 gap-6 text-center text-white">

          <div>
            <h3 className="font-bold">Free Shipping</h3>
          </div>

          <div>
            <h3 className="font-bold">Secure Payment</h3>
          </div>

          <div>
            <h3 className="font-bold">Premium Quality</h3>
          </div>

          <div>
            <h3 className="font-bold">Easy Returns</h3>
          </div>

        </div>

      </Container>

    </section>
  );
};

export default TrustBar;
