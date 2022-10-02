import React from "react";
import {Button, PopupModal } from "../../../shared";
import {FavItem} from "./favoritesList.styled";

export const FavoritesList = ({
  favoritesList,
  removeItem,
  setIsViewingFavorites,
}: any) => {
  return (
    <PopupModal
      buttonName="Close"
      handleClickButton={() => setIsViewingFavorites(false)}
      text={
        favoritesList.length > 0 &&
        favoritesList?.map((place: any, index: number) => {
          return (
            <FavItem key={index}>
              <div>
                <div style={{fontWeight: "600"}}>{place.name}</div>
                <div>{place.address}</div>
              </div>
              <div>
                <Button onClick={() => removeItem(place)}>Remove</Button>
              </div>
            </FavItem>
          );
        })
      }
    />
  );
};
