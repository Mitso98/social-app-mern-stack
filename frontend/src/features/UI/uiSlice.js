import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  focus: false,
  sideMenu: false,
  obj: "",
  openedUI: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleFocus: (state) => {
      state.focus = !state.focus;
    },

    setObj: (state, action) => {
      state.obj = action.payload;
    },

    toggleSideMenu: (state) => {
      state.sideMenu = !state.sideMenu;
    },

    setOpenedUi: (state, action) => {
      state.openedUI = action.payload;
    },
  },

  extraReducers: () => {},
});

export const { toggleFocus, toggleSideMenu, setObj, setOpenedUi } =
  uiSlice.actions;
export default uiSlice.reducer;
