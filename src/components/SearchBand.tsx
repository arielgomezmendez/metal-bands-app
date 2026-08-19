import { useState } from "react";

type SearchProps = {
  onSearch: (value: string) => void;
};

const SearchBand = ({ onSearch }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(inputValue.trim());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setInputValue(value);

    if (!value.trim()) {
      onSearch("");
    }
  };

  return (
    <form
      role="search"
      className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 px-4 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <label htmlFor="band-search" className="sr-only">
        Search
      </label>

      <input
        id="band-search"
        type="search"
        placeholder="Search band..."
        className="h-12 w-full rounded border border-gray-600 bg-[#181818] px-4 text-white placeholder:text-gray-400"
        value={inputValue}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="h-12 rounded bg-[#df3c39] px-8 font-semibold text-white transition-colors hover:bg-[#df3c39]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBand;
