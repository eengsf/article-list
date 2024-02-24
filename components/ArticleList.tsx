import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ArticleList = ({ api }: any) => {
  return (
    <div className="bg-slate-700 flex flex-wrap justify-center md:pt-24 pt-32 gap-4 px-4">
      {api.articles.map((item: any, i: any) => {
        let ttl = item.title;
        if (ttl?.length > 60) {
          ttl = ttl.slice(0, 60) + "...";
        }
        return (
          <div
            key={i}
            className="bg-white text-black w-full md:max-w-sm sm:max-w-xl h-48 shadow-lg border rounded-lg p-5 relative">
            <h2 className="card-title lg:text-xl md:text-xl mb-1">{ttl}</h2>
            <span className="lg:text-lg md:text-sm bg-blue-500 py-1 px-3 rounded-md">
              {item.author}
            </span>
            <div className="card-actions absolute bottom-4">
              <Link
                href={item.url}
                className="flex items-center hover:text-blue-500">
                Read More
                <MdKeyboardDoubleArrowRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
