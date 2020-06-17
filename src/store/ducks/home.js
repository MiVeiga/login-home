import { createReducer, createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  saveUsers: ["lsUsers"],
});

const INITIAL_STATE = {};

const saveUsers = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  return { ...state, payload };
};

export default createReducer(INITIAL_STATE, {
  [Types.SAVE_USERS]: saveUsers,
});
