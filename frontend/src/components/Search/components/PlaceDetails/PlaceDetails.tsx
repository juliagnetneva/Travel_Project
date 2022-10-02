import React from "react";
import { FlexRow, HeadingSmall } from "../../../shared";
import { PlaceImage, PlaceItem } from "./placeDetails.styles";

export const PlaceDetails = ({ place }: any) => {

  return (
    <PlaceItem>
      <PlaceImage>
        <img
          src={
            place.photo
              ? place.photo.images.medium.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          }
          alt={place.name}
        />
      </PlaceImage>
      <FlexRow>
        <HeadingSmall>{place.name}</HeadingSmall>
        <p>Rating: {Number(place.rating)}</p>
      </FlexRow>

      <p>
        {place.num_reviews} review{place.num_reviews > 1 && "s"}
      </p>
      {place.phone && <p>{place.phone}</p>}
      {place.address && <p>{place.address}</p>}
    </PlaceItem>
  );
};
