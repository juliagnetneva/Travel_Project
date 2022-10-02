import React, { createRef, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
//
import { FormWrap, ListStyled, RenderList } from "./list.styles";
import { PlaceDetails } from "../PlaceDetails/PlaceDetails";
import { HeadingSmall } from "../../..";

export const List = ({ places, isLoading, type, setType }: any) => {
  const [rating, setRating] = useState("");

  return (
    <ListStyled>
      <FormWrap>
        <HeadingSmall>Restaurants, Hotels, Attractions</HeadingSmall>
        <form>
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </form>
        <form>
          <label>Rating</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </form>
      </FormWrap>

      {isLoading ? (
        <div style={{ margin: "0 auto" }}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ff3737"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      ) : (
        <RenderList>
          {places?.map((place: any, index: number) => (
            <div key={index}>
              <PlaceDetails place={place} key={index} />
            </div>
          ))}
        </RenderList>
      )}
    </ListStyled>
  );
};
