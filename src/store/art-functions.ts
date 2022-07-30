import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { artAction } from "./art-slice";

const ALL_URL = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,image_id,thumbnail";

export const getData = () => {
  return async (dispatch) => {
    async function innerFunction() {
      const response = await fetch(ALL_URL);

      const data = await response.json();
      return data;
    }

    try {
      const data = await innerFunction();

      const newArtList = {
        artArray: data.data,
        config: data.config.iiif_url
      };

      dispatch(artAction.getData(newArtList));

      dispatch(artAction.setNotification({
        type: "success",
        description: "Data downloaded successfully",
        title: "Success"
      }))
    } catch (err: any) {
      dispatch(artAction.setNotification({
        type: "error",
        description: err.message,
        title: "Error"
      }))
    }
  }
}
