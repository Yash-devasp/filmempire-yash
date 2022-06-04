import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';

import genreOrCategoryReducer from '../feature/currentGenreOrCategory';
import userReducer from '../feature/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
});
