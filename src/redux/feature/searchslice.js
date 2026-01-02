import { createSlice } from '@reduxjs/toolkit'; 

const searchSlice = createSlice({
  name: 'search',
  initialState: { 
    query: '',
    loading: false,
    activeTab: 'photos', 
    error: null,
    results: [],
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
          state.loading = false;
          state.error = null;
          state.results = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      state.error = null;
      state.results = [];
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
      state.loading = false;
      state.error = null;
      state.results = [];

    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.results = [];
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.loading = false;
      state.error = null;
    },
    clearResults: (state) => {
          state.results = [];
    }
  }
});

export const {
  setQuery,
  setLoading,
  setActiveTab,
  setError,
  setResults,
  clearResults
} = searchSlice.actions;


export default searchSlice.reducer;
