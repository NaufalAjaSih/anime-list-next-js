"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

function InputSearch() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const route = useRouter();

  function performSearch() {
    if (searchRef.current !== null && searchRef.current.value) {
      const keyword = searchRef.current.value;
      route.push(`/search/${keyword}`);
    }
  }

  function handleSearch(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    performSearch();
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      performSearch();
    }
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search anime"
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleKeyPress}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}

export default InputSearch;
