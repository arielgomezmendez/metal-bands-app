import { useEffect, type RefObject } from "react";

type TypographyContentProps = {
  headingFinishRef: RefObject<HTMLHeadingElement | null>;
};

const TypographyContent = ({ headingFinishRef }: TypographyContentProps) => {
  useEffect(() => {
    headingFinishRef.current?.focus();
  }, []);

  return (
    <div>
      <h1
        className="text-4xl font-extrabold leading-tight tracking-normal text-[#F5F5F5] md:text-5xl"
        ref={headingFinishRef}
        tabIndex={-1}
      >
        You completed Guess the Riff!
      </h1>
      <p className="mx-auto mt-3 max-w-[560px] text-base font-medium leading-relaxed text-[#8A8A8A]">
        You've proven your metal knowledge. The riffs didn't stand a chance.
      </p>
    </div>
  );
};

export default TypographyContent;
