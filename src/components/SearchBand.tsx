

const SearchBand = () => {
  return (
    <form
      role="search"
      className="mx-auto flex w-86 mt-10 max-w-xl flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="band-search" className="sr-only">
        Search
      </label>

      <input
        id="band-search"
        type="search"
        placeholder="Search band..."
        className="h-12 w-full rounded border border-gray-600 bg-[#181818] px-4 text-white placeholder:text-gray-400"
      />

      <button
        type="submit"
        className="h-12 rounded bg-red-600 px-8 font-semibold text-white transition-colors hover:bg-red-700  "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBand;
