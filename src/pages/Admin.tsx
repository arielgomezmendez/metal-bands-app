const Admin = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 text-[#f5f5f5] sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-normal sm:text-5xl">
          Admin Panel
        </h1>
        <p className="mt-4 text-lg text-[#b0b0b0]">
          Manage the bands used in the application.
        </p>
        <div className="mx-auto mt-5 h-0.5 w-20 bg-[#ef1b24]" />
      </div>

      <div className="mt-6 rounded-lg border border-[#2f3030] bg-[#0d0f0f] px-5 py-7 text-left shadow-[0_0_45px_rgba(0,0,0,0.35)] sm:px-7">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="text-2xl font-extrabold tracking-normal text-[#f5f5f5]">
            Add New Band
          </h2>
        </div>

        <form className="space-y-4">
          <label
            htmlFor="bandName"
            className="block text-lg font-bold text-[#b8b8b8]"
          >
            Band Name
          </label>

          <div className="grid gap-5 md:grid-cols-[1fr_186px] md:items-center">
            <input
              id="bandName"
              name="bandName"
              type="text"
              placeholder="e.g. Iron Maiden"
              className="h-14 w-full rounded border border-[#484b4d] bg-[#090a0a] px-5 text-lg text-[#f5f5f5] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#ef1b24] focus:ring-2 focus:ring-[#ef1b24]/35"
            />

            <button
              type="submit"
              className="flex h-14 items-center justify-center gap-5 rounded bg-[#e01822] px-6 text-base font-extrabold uppercase text-white transition hover:bg-[#f11f2a] focus:outline-none focus:ring-2 focus:ring-[#ef1b24] focus:ring-offset-2 focus:ring-offset-[#0d0f0f]"
            >
              <span>Add Band</span>
              <span aria-hidden="true" className="text-3xl font-light leading-none">
                +
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Admin;
