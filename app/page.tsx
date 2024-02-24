import { getAnimeResponse } from "../libs/api-libs";
import ArticleCard from "@/components/ArticleCard";

export default async function Home() {
  const response = await getAnimeResponse({
    endpoint: "everything?",
    keyword: "q=random",
  });
  return (
    <div className="bg-slate-50">
      <ArticleCard api={response} />
    </div>
  );
}
