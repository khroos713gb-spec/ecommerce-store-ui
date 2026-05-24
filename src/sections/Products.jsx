import Container from "../components/Container";

const Products = () => {
  const products = [
    {
      name: "Premium Sneakers",
      price: "$89",
    },
    {
      name: "Modern Hoodie",
      price: "$59",
    },
    {
      name: "Smart Watch",
      price: "$149",
    },
    {
      name: "Leather Backpack",
      price: "$99",
    },
  ];

  return (
    <section className="py-24 bg-black text-white">

      <Container>

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Featured Products
          </h2>

          <p className="text-slate-400 mt-4">
            Explore our best selling collection.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="h-64 bg-slate-800"></div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <p className="text-orange-500 text-2xl font-bold mt-3">
                  {product.price}
                </p>

                <button className="mt-5 w-full py-3 bg-orange-500 rounded-xl font-semibold">
                  Add To Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Products;
