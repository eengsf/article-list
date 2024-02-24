import { getAnimeResponse } from "@/libs/api-libs";
import ArticleList from "@/components/ArticleList";

export default async function Page({ params }: any) {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);

  const searchArticle = await getAnimeResponse({
    endpoint: "top-headlines?",
    keyword: `country=${decodeKeyword}`,
  });

  return (
    <>
      <>
        <ArticleList api={searchArticle} />
      </>
    </>
  );
}
