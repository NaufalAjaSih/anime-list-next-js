import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

async function Page({ params }: any) {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const anime = await response.json();

  return (
    <>
      <section>
        <Header title={`Search results for ${keyword}`} />
        <AnimeList data={anime} />
      </section>
    </>
  );
}

export default Page;
