import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ArticleCard = ({ api }: any) => {
  return (
    <div className="bg-slate-50 flex flex-wrap justify-center md:pt-24 pt-32 gap-4 px-4">
      {api.articles.map((item: any, i: any) => {
        let desc = item.description;
        let ttl = item.title;
        if (desc?.length > 50) {
          desc = desc.slice(0, 50) + "...";
        }
        if (ttl?.length > 40) {
          ttl = ttl.slice(0, 40) + "...";
        }

        return (
          <div
            key={i}
            className="card lg:w-80 md:w-72 w-full lg:h-[460px] md:h-[384px] h-1/2 bg-white shadow-xl text-black overflow-hidden">
            <figure className=" w-full h-1/2 overflow-hidden">
              <img
                src={item.urlToImage}
                alt="None"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body w-full h-1/2">
              <h2 className="font-semibold">{ttl}</h2>
              <p className="text-sm">{desc}</p>
              <div className="card-actions justify-end">
                <Link
                  href={item.url}
                  className="flex items-center hover:text-blue-500 text-sm">
                  Read More
                  <MdKeyboardDoubleArrowRight size={20} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleCard;
