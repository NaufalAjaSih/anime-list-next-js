import Image from "next/image";
import Link from "next/link";
import React from "react";

function AnimeList({ data }: any) {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {data.data.map((item: any) => (
        <Link href={`/${item.id}`} className="cursor-pointer">
          <div>
            <Image
              src={item.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl text-md p-4">{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AnimeList;
