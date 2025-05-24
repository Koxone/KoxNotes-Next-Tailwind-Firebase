import React from "react";

function SearchInput({ styles = "" }) {
  return (
    <div className="w-full h-auto flex overflow-hidden">
      <input
        className={`${styles} w-full h-10  border py-3 px-4 border-neutral-500 placeholder:text-neutral-500 outline-none rounded-lg p-1.5 mb-6 bg-transparent`}
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default SearchInput;
