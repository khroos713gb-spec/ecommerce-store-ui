import Container from "../components/Container";
import {
  FaTshirt,
  FaHeadphones,
  FaGlasses,
  FaShoePrints,
  FaClock,
  FaShoppingBag
} from "react-icons/fa";

const Categories = () => {
  const categories = [
    { icon: <FaTshirt />, title: "Fashion", items: "120+ Items" },
    { icon: <FaHeadphones />, title: "Electronics", items: "80+ Items" },
    { icon: <FaGlasses />, title: "Accessories", items: "150+ Items" },
    { icon: <FaShoePrints />, title: "Footwear", items: "100+ Items" },
    { icon: <FaClock />, title: "Watches", items: "60+ Items" },
    { icon: <FaShoppingBag />, title: "Lifestyle", items: "90+ Items" },
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
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-3 hover:border-orange-500 transition-all duration-300"
            >

              <div className="text-5xl text-orange-500 mb-4 flex justify-center">
                {category.icon}
              </div>

              <h3 className="font-bold text-lg">
                {category.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {category.items}
              </p>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Categories;
