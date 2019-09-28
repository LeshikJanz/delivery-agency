import { createReducer } from 'utils/createReducer'

const initialState = {
  list: [],
  selected: null,
  loading: false,
};

export default createReducer({
}, initialState);