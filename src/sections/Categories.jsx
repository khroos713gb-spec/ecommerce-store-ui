import Container from "../components/Container";

const Categories = () => {
  const categories = [
    "Fashion",
    "Electronics",
    "Accessories",
    "Footwear",
    "Watches",
    "Lifestyle",
  ];

  return (
    <section className="py-24 bg-slate-950 text-white">

      <Container>

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Shop By Category
          </h2>

          <p className="text-slate-400 mt-4">
            Find products that match your style.
          </p>

        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="font-bold">
                {category}
              </h3>
            </div>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Categories;
