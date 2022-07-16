import { createSlice, current } from "@reduxjs/toolkit";

export const deliveredNotifsSlice = createSlice({
  name: "deliveredNotifs",
  initialState: {
    value: {
      notifs: [],
      notifToastList: [],
    },
  },
  reducers: {
    add: (state, action) => {
      //  const newData = [state.value.notifs, ...action.payload.newNotifs];
      // state.value.notifs = newData;

      state.value.notifs = [...state.value.notifs, ...action.payload.newNotifs];
      state.value.notifToastList = [
        ...state.value.notifToastList,
        ...action.payload.newNotifs,
      ];

      console.log("eklendi");
    },
    clear: (state, action) => {
      state.value.notifs = [];
    },
    removeFromToastList: (state, action) => {
      let updated = state.value.notifToastList.filter(
        (x) => x.id != action.payload.notif.id
      );
      state.value.notifToastList = updated;
    },
  },
});

export const { add, clear, removeFromToastList } = deliveredNotifsSlice.actions;
export default deliveredNotifsSlice.reducer;
