const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="md:px-32 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
          <h1 className="text-5xl font-bold tracking-tight text-orange-500">
            Tuck into a takeway today
          </h1>
          <span className="text-2xl  font-extrabold">
            <h2 className="neon">Food is just a click away!</h2>
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <img src={'/landing.png'} alt="" />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter bg-gradient-to-br from-orange-400 via-orange-100 to-orange-700 text-transparent inline-block bg-clip-text">
              Order tekeway even faster!
            </span>
            <span>
              Download the MernEats App for faster ordering and personalised
              recommendations
            </span>
            <img src="/appDownload.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
