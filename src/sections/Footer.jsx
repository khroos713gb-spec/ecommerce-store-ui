import Container from "../components/Container";

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-950 border-t border-slate-800 text-white">

      <Container>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <h3 className="text-2xl font-bold">
            StoreUI
          </h3>

          <div className="flex gap-6 text-slate-400">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Categories</a>
            <a href="#">Contact</a>
          </div>

        </div>

        <div className="text-center text-slate-500 mt-8">
          StoreUI 2026. All Rights Reserved.
        </div>

      </Container>

    </footer>
  );
};

export default Footer;
