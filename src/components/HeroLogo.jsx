const HeroLogo = () => {
  return (
    <div className="relative h-[500px] flex items-center justify-center">

      <div className="absolute w-80 h-80 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="relative w-96 h-96 rounded-full border-8 border-orange-500 flex items-center justify-center">

        <div className="text-center">

          <div className="text-7xl font-black text-orange-500">
            70%
          </div>

          <div className="text-3xl font-bold text-white mt-2">
            OFF
          </div>

          <div className="mt-6 px-4 py-2 bg-orange-500 text-black rounded-full font-bold inline-block">
            LIMITED SALE
          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroLogo;
