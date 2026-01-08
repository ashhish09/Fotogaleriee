import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchphotos, fetchgifs, fetchvideos } from "../api/mediaApi";
import Resultcard from "./resultcard";
import {
  setLoading,
  setError,
  setResults
} from "../redux/feature/searchSlice";
import "../index.css";

const resultgrid = () => {
  const dispatch = useDispatch();
  const { query , activeTab , results , loading , error } = useSelector((state) => state.search);

  const getdata = async () => {
  try {
    dispatch(setLoading(true));
      let data=[];
    if (!query) return;
    if (activeTab === "photos") {
         
       let res = await fetchphotos(query);
        data = res.map((item, index) => ({
          id: item.id,
          type: "photo",
          thumbnail: item.urls.small,
          title: item.alt_description || item.description || "Untitled",
          src: item.urls.full,
          alt: item.alt_description,
          download_url: item.links.download,
          url: item.links.html

        }));
    } else if (activeTab === "videos") {

       let res = await fetchvideos(query);
        data = res.map((item, index) => ({
          id: item.id,
          type: "video",
          thumbnail: item.image,
          title: item.user.name || "video",
          src: item.video_files[0].link,
          alt: item.user.name,
          url: item.url

        }));
    } else if (activeTab === "Gifs") {
        let res = await fetchgifs(query);
       data = res.map((item) => ({
          id: item.id,
          type: "gif",
          thumbnail: item.media_formats.gif.url,
          title: item.title,
          src: item.media_formats.gif.url,
          alt: item.title,
          url: item.url 
            
        }));
      
    }
   dispatch(setResults(data));
   console.log("fetched data:", data);
    
  } catch (error) {
    console.error("Error fetching data:", error);
    dispatch(setError("Failed to fetch data"));
  }
  };

  useEffect(() => {
    getdata();
  }, [activeTab, query , dispatch]);

  if (loading) {
    return <div className=" w-full h-4/7 bg-gray-900 ">Loading...</div>;
  }

  if (error) {
    return <div className=" w-full h-4/7 bg-gray-900 ">Error: {error}</div>;
  }

   return <div className=" w-full min-130vh bg-gray-900 flex flex-wrap align-space-between justify-space-between gap-1 pl-27 pt-2.5 ">
         { results.map((item) => (
            <div href={item.url}><Resultcard key={item.id} {...item} /></div>
          )
             )}
  </div>;
};

export default resultgrid;
