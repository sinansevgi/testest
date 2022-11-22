import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'FETCH',
  async () => {
    const response = await (fetch(url)).then((res) => res.json());
    return response;
  },
);

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH/fulfilled': {
      return state;
    }
    default:
      return state;
  }
};

export default rocketsReducer;
