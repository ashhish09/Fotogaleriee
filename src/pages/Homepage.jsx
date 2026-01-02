import React from "react";
import Searchbar from "../component/searchbar";
import Tabs from "../component/tabs";
import Resultgrid from "../component/resultgrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { query } = useSelector((state) => state.search);
  return (
    <div className="w-full h-screen bg-gray-950 text-white ">
      <div className="h-13 w-screen  text-2xl font-medium bg-blue-700 flex align-center justify-between">
        <h1 className="pl-10 pt-1 pb-1 uppercase">Fotogalerie</h1>
        <div className="flex gap-10  pt-2 justify-end pr-10">
          <Link
            className="text-lg text-black px-4 py-2 lowercase bg-white rounded-2xl"
            to="/"
          >
            Search
          </Link>
          <Link
            className="text-lg text-black px-4 py-2 lowercase bg-white rounded-2xl"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>

      <Searchbar />

      {query !== "" && (
        <div>
          <Tabs />
          <Resultgrid />
        </div>
      )}
    </div>
  );
};

export default Homepage;
