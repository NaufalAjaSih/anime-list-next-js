import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

function Navbar() {
  return (
    <header className="bg-orange-400">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href={"/"} className="font-bold text-white text-2xl">
          MovieAnime
        </Link>
        <InputSearch/>
      </div>
    </header>
  );
}

export default Navbar;
