"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const InputSearch = () => {
  const [inputSearch, setInputSearch] = useState("");
  const route = useRouter();

  function handleSeacrh(event: any) {
    const keyword = inputSearch;

    if (!keyword || keyword.trim() === "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      route.push(`/search/${keyword}`);
    }
  }
  return (
    <div className="form-control md:w-72 w-full relative">
      <input
        type="text"
        placeholder="Search"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        className="input input-bordered w-full bg-slate-100"
      />
      <button className="absolute top-3 end-3" onClick={handleSeacrh}>
        <CiSearch size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
