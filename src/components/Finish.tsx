const Finish = () => {
  const waveformBars = [18, 28, 38, 48, 58, 42, 30, 54, 72, 36, 26, 48, 64, 42, 30, 52, 66, 44, 34, 48, 62, 40, 28, 36, 24];

  return (
    <section className="flex min-h-[calc(100vh-220px)] flex-col items-center px-4 pt-24 text-center text-[#F5F5F5]">
      <div className="mb-12 rounded-full bg-[#1DB954] px-6 py-3 text-base font-bold text-white md:text-lg">
        15 of 15 riffs completed
      </div>

      <TypographyContent />

      <div className="mt-12 w-full max-w-[460px] rounded-[22px] border border-white/10 bg-[#1A1A1A] px-8 py-16 shadow-[0_24px_50px_rgba(0,0,0,0.45)] md:px-10">
        <p className="text-6xl font-extrabold leading-none text-[#F5F5F5] md:text-7xl">
          12 / 15
        </p>
        <p className="mt-4 text-base font-medium text-[#8A8A8A]">
          12 correct answers out of 15 riffs
        </p>

        <div className="mt-12 flex h-16 items-end justify-center gap-2" aria-hidden="true">
          {waveformBars.map((height, index) => (
            <span
              className="w-[5px] rounded-full bg-[#1f9d55]"
              key={`${height}-${index}`}
              style={{ height }}
            />
          ))}
        </div>

        <div className="my-10 h-px w-full bg-white/10" />

        <div className="flex flex-col gap-4">
          <button
            className="h-16 rounded-2xl bg-[#D32F2F] text-lg font-bold text-white transition-colors hover:bg-[#B71C1C] focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#D32F2F]"
            type="button"
          >
            Play Again
          </button>
          <button
            className="h-16 rounded-2xl border border-white/10 bg-transparent text-lg font-bold text-[#F5F5F5] transition-colors hover:border-white/20 hover:bg-white/[0.03] focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#D32F2F]"
            type="button"
          >
            Back to Bands
          </button>
        </div>
      </div>
    </section>
  );
};

const TypographyContent = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold leading-tight tracking-normal text-[#F5F5F5] md:text-6xl">
        You completed Guess the Riff!
      </h1>
      <p className="mx-auto mt-8 max-w-[560px] text-lg font-medium leading-relaxed text-[#8A8A8A] md:text-xl">
        You've proven your metal knowledge. The riffs didn't stand a chance.
      </p>
    </div>
  );
};

export default Finish
