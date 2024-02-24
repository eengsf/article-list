import { getAnimeResponse } from "@/libs/api-libs";
import ArticleCard from "@/components/ArticleCard";

export default async function Page({ params }: any) {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);

  const searchArticle = await getAnimeResponse({
    endpoint: "everything?",
    keyword: `q=${decodeKeyword}`,
  });

  return (
    <>
      <>
        <ArticleCard api={searchArticle} />
      </>
    </>
  );
}
