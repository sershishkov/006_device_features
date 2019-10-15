import * as FileSystem from 'expo-file-system';

import { ADD_PLACE } from '../types';
import { insertPlace } from '../../helpers/db';

export const addPlace = (title, image) => {
  return async dispatch => {
    const fileName = image.split('/').pop();

    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        'Dummy address',
        18.15,
        36.42
      );
      console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title: title,
          image: newPath
        }
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
