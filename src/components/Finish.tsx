import { Link } from "react-router-dom";
import TypographyContent from "./TypographyContent";

type FinishProps = {
  onPlayAgain: () => void;
};

const Finish = ({ onPlayAgain }: FinishProps) => {
  const waveformBars = [
    18, 28, 38, 48, 58, 42, 30, 54, 72, 36, 26, 48, 64, 42, 30, 52, 66, 44, 34,
    48, 62, 40, 28, 36, 24,
  ];

  return (
    <section className="flex min-h-[calc(100vh-220px)] flex-col items-center px-4 pt-[4%] text-center text-[#F5F5F5]">
      <span className="mb-6 rounded-full bg-[#1DB954] px-5 py-2 text-sm font-bold text-white md:text-base">
        15 of 15 riffs completed
      </span>

      <TypographyContent />

      <article className="mt-8 w-full max-w-[700px] rounded-2xl border border-white/[0.05] bg-[#1A1A1A] px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <p className="text-5xl font-extrabold leading-none text-[#F5F5F5] md:text-6xl">
          12 / 15
        </p>
        <p className="mt-3 text-base font-medium text-[#8A8A8A]">
          12 correct answers out of 15 riffs
        </p>

        <div
          className="mt-8 flex h-14 items-end justify-center gap-1.5"
          aria-hidden="true"
        >
          {waveformBars.map((height, index) => (
            <span
              className="w-1 rounded-full bg-[#1f9d55]"
              key={`${height}-${index}`}
              style={{ height: Math.round(height * 0.75) }}
            />
          ))}
        </div>

        <div className="my-8 h-px w-full bg-white/10" />

        <div className="mx-auto flex w-full max-w-[420px] flex-col items-center gap-3">
          <button
            className="h-10 w-3/5 rounded-lg bg-[#D32F2F] px-2 text-lg font-bold text-white transition-colors hover:bg-[#B71C1C] "
            onClick={onPlayAgain}
            type="button"
          >
            Play Again
          </button>
          <Link
            className="flex h-10 w-3/5 items-center justify-center rounded-lg border border-white/10 bg-transparent px-2 text-lg font-bold text-[#F5F5F5] no-underline transition-colors hover:border-white/20 hover:bg-white/[0.03]"
            to="/"
          >
            Back to Bands
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Finish;
