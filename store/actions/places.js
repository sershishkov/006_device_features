import { ADD_PLACE } from '../types';

export const addPlace = (title, imagePath) => {
  return {
    type: ADD_PLACE,
    placeData: {
      title: title,
      image: imagePath
    }
  };
};
