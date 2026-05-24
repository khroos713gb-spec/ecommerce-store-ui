import Container from "../components/Container";

const Cart = () => {
  return (
    <section className="py-24 bg-black text-white">

      <Container>

        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-4xl font-bold mb-8">
            Your Premium Cart
          </h2>

          <div className="space-y-6">

            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-bold">Premium Sneakers</h3>
                <p className="text-slate-400">$89</p>
              </div>

              <span>1x</span>
            </div>

            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-bold">Smart Watch</h3>
                <p className="text-slate-400">$149</p>
              </div>

              <span>1x</span>
            </div>

          </div>

          <div className="flex justify-between text-green-500 mb-4"><span>You Saved</span><span>$32</span></div><div className="flex justify-between mt-8 text-2xl font-bold">
            <span>Total</span>
            <span>$238</span>
          </div>

          <button className="w-full mt-8 py-4 bg-orange-500 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300">
            Checkout
          </button>

        </div>

      </Container>

    </section>
  );
};

export default Cart;


