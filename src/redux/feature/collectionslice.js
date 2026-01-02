import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      console.log("➡️ Reducer called", action.payload);

      const exists = state.items.find((item) => item.id === action.payload.id);

      if (exists) {
        console.log("⚠️ Already exists");
        return;
      }

      state.items.push(action.payload);

      console.log("📦 Updated:", state.items);

      localStorage.setItem("collection", JSON.stringify(state.items));

      console.log("💾 Saved to localStorage");
    },

    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem("collection", JSON.stringify(state.items));
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.setItem("collection", JSON.stringify([]));
    },
    addedToast: () => {
      toast("🦄 Added to collection", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "fade",
      });
    },
  },
});

export const { addCollection, removeCollection, clearCollection, addedToast } =
  collectionSlice.actions;

export default collectionSlice.reducer;
