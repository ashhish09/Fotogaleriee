import "../index.css";
import { useDispatch } from "react-redux";
import {
  addCollection,
  removeCollection,
  clearCollection,
} from "../redux/feature/collectionslice";
import { addedToast } from "../redux/feature/collectionslice";


const ResultCard = (props) => {
  const dispatch = useDispatch();

  const collection = (info) => {
    console.log("Saving item:", info);
    dispatch(addCollection(info));
    dispatch(addedToast());
  };

  const share = (info) => {
    const link = info.url || info.src;

    navigator.clipboard
      .writeText(link)
      .then(() => alert("Link copied to clipboard"))
      .catch(() => alert("Failed to copy link"));
  };

  return (
    <div
      className="m-1 p-1 rounded-lg hover:scale-105 cursor-pointer 
                    h-70 w-75 transition-all duration-300 relative"
    >
      <a className="h-[60%] block overflow-hidden rounded-lg">
        {props.type === "photo" && (
          <img
            className="h-full w-full object-cover hover:scale-95 transition-all duration-200"
            src={props.src}
            alt={props.title}
          />
        )}

        {props.type === "video" && (
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={props.src}
          />
        )}

        {props.type === "gif" && (
          <img
            className="h-full w-full object-cover hover:scale-95 transition-all duration-200"
            src={props.src}
            alt={props.title}
          />
        )}
      </a>

      {/* Buttons aligned to flex-end bottom-right */}
      <div className="absolute bottom-4 right-4 flex gap-4 justify-end items-end">
        <button
          onClick={(e) => {
            e.stopPropagation();
            collection(props);
          }}
          className="px-4 py-2 rounded-2xl 
                     bg-gradient-to-r from-indigo-500 to-purple-500 
                     text-white font-medium shadow-md 
                     hover:shadow-lg hover:scale-105 
                     transition-all duration-300"
        >
          Save
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            share(props);
          }}
          className="px-4 py-2 rounded-2xl bg-white/80 border"
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
