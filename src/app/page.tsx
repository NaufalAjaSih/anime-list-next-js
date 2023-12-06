import React from "react";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await response.json();

  return (
    <>
      <section>
        <Header title="Top Anime" linkTitle="View All" linkHref="/top/anime" />
        <AnimeList data={topAnime} />
      </section>
    </>
  );
}

export default Home;
