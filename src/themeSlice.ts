// themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  isDarkTheme: boolean;
}

const initialState: ThemeState = {
  isDarkTheme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state: ThemeState) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkTheme = (state: { theme: ThemeState }) =>
  state.theme.isDarkTheme;

export default themeSlice.reducer;
