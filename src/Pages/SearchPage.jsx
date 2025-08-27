import React from "react";
import Weather from "../Components/Weather";
import ClockAndQuote from "../Components/ClockAndQuote";
import SearchAndBookmarks from "../Components/SearchAndBookmarks";

const SearchPage = () => {
  return (
    <div>
      <main className="h-dvh w-dvw flex-Between sm:flex-Center flex-col gap-0 px-6 pt-5 pb-12 sm:gap-12 sm:px-9 sm:py-9 text-base relative">
        {/* Use the Weather component */}
        <Weather />

        {/* Use the ClockAndQuote component */}
        <ClockAndQuote />

        {/* Use the SearchAndBookmarks component */}
        <SearchAndBookmarks />
      </main>
    </div>
  );
};

export default SearchPage;
