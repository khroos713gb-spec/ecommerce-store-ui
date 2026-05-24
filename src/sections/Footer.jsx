import Container from "../components/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

          <div className="flex gap-4">

            <a
              href="https://github.com/khroos713gb-spec"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-orange-500 hover:text-black transition-all"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-orange-500 hover:text-black transition-all"
            >
              <FaLinkedin size={22} />
            </a>

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
