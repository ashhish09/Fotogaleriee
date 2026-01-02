import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCollection } from "../redux/feature/collectionSlice";

const CollectionPage = () => {

  const collections = useSelector(state => state.collection.items);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-900 text-white">

 
      <div className="h-13 w-screen text-2xl font-medium bg-blue-700 flex justify-between">
        <h1 className="pl-10 pt-1 pb-1 uppercase">Fotogalerie</h1>

        <div className="flex gap-10 pt-2 pr-10">
          <Link className="text-lg text-black px-4 py-2 bg-white rounded-2xl" to="/">
            Search
          </Link>

          <Link className="text-lg text-black px-4 py-2 bg-white rounded-2xl" to="/collection">
            Collection
          </Link>
        </div>
      </div>

     
      <div className="p-6 flex flex-wrap gap-4">
        {collections.length === 0 && (
          <p className="text-gray-400">No items saved yet.</p>
        )}

        {collections.map(item => (
          <div
            key={item.id}
            className="bg-white/10 rounded-xl p-3 w-64"
          >
            <img
              src={item.thumbnail || item.src}
              alt={item.title}
              className="rounded-lg h-40 w-full object-cover"
            />

            <h2 className="mt-2 text-sm line-clamp-2">{item.title}</h2>

            <div className="flex justify-between mt-2">

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm"
              >
                Open
              </a>

              <button
                onClick={() => dispatch(removeCollection(item.id))}
                className="px-3 py-1 rounded-xl bg-red-500 text-white text-sm hover:bg-red-600"
              >
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
