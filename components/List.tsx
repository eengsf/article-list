import Link from "next/link";

const categories = [
  { name: "Business", keyword: "business" },
  { name: "Entertainment", keyword: "entertainment" },
  { name: "General", keyword: "general" },
  { name: "Health", keyword: "health" },
  { name: "Science", keyword: "science" },
  { name: "Sports", keyword: "sports" },
  { name: "Technology", keyword: "technology" },
];
const countries = [
  { name: "China", keyword: "cn" },
  { name: "Inggris", keyword: "gb" },
  { name: "Prancis", keyword: "fr" },
  { name: "Arab Saudi", keyword: "sa" },
  { name: "Rusia", keyword: "ru" },
  { name: "Turkey", keyword: "tr" },
  { name: "India", keyword: "in" },
  { name: "Italia", keyword: "it" },
  { name: "Portugal", keyword: "pt" },
  { name: "Amerika", keyword: "us" },
  { name: "Indonesia", keyword: "id" },
];

const List = ({ value }: any) => {
  return (
    <ul
      tabIndex={1}
      className={`md:mt-7 sm:mt-6 mt-5 z-[1] p-2 shadow-md menu menu-md dropdown-content bg-white w-52 absolute ${
        value === "category" ? "left-0" : "right-0"
      }`}>
      {value === "category"
        ? categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/category/${category.keyword}`}
                className="justify-between">
                {category.name}
              </Link>
            </li>
          ))
        : countries.map((country, index) => (
            <li key={index}>
              <Link
                href={`/country/${country.keyword}`}
                className="justify-between">
                {country.name}
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default List;
