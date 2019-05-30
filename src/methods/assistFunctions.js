import { SLOPE_NORMAL, SLOPE_EARTHQUAKE } from '../assets/refer.js';

export const getFs = (model_type, state) => {
  switch (model_type) {
    case SLOPE_NORMAL:
      return state.fs_normal;
    case SLOPE_EARTHQUAKE:
      return state.fs_earthquake;
    default:
      return;
  }
};

export const convertNumToDateString = num=> {
  const date = new Date(num);
  return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
