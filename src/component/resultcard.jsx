import "../index.css";
import { useDispatch } from "react-redux";
import {
  addCollection,
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
  className="
    group relative 
    w-60   /* medium width */
    h-72   /* medium height */
    m-2 p-2 
    rounded-xl 
    bg-white/5 
    shadow-md 
    hover:shadow-xl hover:scale-[1.02]
    transition-all duration-300
  "
>
  <div className="h-44 w-full overflow-hidden rounded-lg">
    {props.type === "photo" && (
      <img
        src={props.src}
        alt={props.title}
        className="
          w-full h-full object-cover 
          transition duration-300 
          group-hover:scale-105
        "
      />
    )}

    {props.type === "video" && (
      <video
        src={props.src}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
    )}
  </div>

  {/* Buttons */}
  <div
    className="
      absolute bottom-3 right-3
      flex gap-2
    "
  >
    <button
      onClick={(e) => {
        e.stopPropagation();
        collection(props);
      }}
      className="
        px-3 py-1.5 text-sm
        rounded-xl 
        bg-gradient-to-r from-indigo-500 to-purple-500
        text-white shadow 
        hover:scale-105
      "
    >
      Save
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        share(props);
      }}
      className="
        px-3 py-1.5 text-sm
        rounded-xl bg-white/80 border
      "
    >
      Share
    </button>
  </div>
</div>

  );
};

export default ResultCard;
