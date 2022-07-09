import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  data: {},
  isEditing: false,
  wantToBeRemembered: false,
};

export const editNameSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    toggleEdition: (state) => {
      state.isEditing = !state.isEditing;
      console.log(state);
    },
    toggleRemember: (state) => {
      state.wantToBeRemembered = !state.wantToBeRemembered;
      console.log(state)
    },
    setRemember: (state, {payload}) => {
      state.wantToBeRemembered = payload;
    },
    downloadUserInfos: (state, { payload }) => {
      state.data = payload;
    },
    deleteUserInfos: (state) => {
      state.data = {};
    },
    chargeToken: (state, { payload }) => {
      state.token = payload;
    },
    deleteToken: (state) => {
      state.token = "";
    },
  },
});
const { reducer, actions } = editNameSlice;
export const {
  toggleEdition,
  toggleRemember,
  setRemember,
  downloadUserInfos,
  deleteUserInfos,
  chargeToken,
  deleteToken,
} = actions;
export default reducer;
