import Container from "../components/Container";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 text-white">

      <Container>

        <div className="h-20 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-orange-500">
            StoreUI
          </h2>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Products</a>
            <a href="#">Deals</a>
            <a href="#">Contact</a>
          </nav>

          <button className="px-5 py-3 bg-orange-500 rounded-xl font-semibold">
            Cart
          </button>

        </div>

      </Container>

    </header>
  );
};

export default Navbar;
