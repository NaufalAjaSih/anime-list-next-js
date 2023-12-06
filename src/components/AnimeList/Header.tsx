import Link from "next/link";
import React from "react";

function Header({ title, linkTitle, linkHref }: any) {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm hover:text-orange-500 transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}

export default Header;
