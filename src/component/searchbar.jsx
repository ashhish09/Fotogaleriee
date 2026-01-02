import "../index.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/feature/searchslice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [searchbarval, setsearchbarval] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchbarval));
    console.log("searching for", searchbarval);
    setsearchbarval("");
  };

  return (
    <div className="w-full h-1/6">
      <form
        className="flex justify-center items-center gap-2 w-full h-full bg-gray-700"
        onSubmit={submithandler}
      >
        <input
          required
          className="border-2 border-cyan-50 rounded-sm text-white bg-gray-900 text-lg mr-2 text-center outline-none h-12"
          type="text"
          placeholder="search anything..."
          value={searchbarval}
          onChange={(e) => setsearchbarval(e.target.value)}
        />

        <button
          type="submit"
          className="p-2.5 text-2xl text-black bg-white rounded-sm active:scale-95 h-12"
        >
          search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
