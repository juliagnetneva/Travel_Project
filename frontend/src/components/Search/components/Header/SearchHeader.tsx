import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import {
  SearchHeading,
  SearchImage,
  Selected,
} from "./searchHeader.styles";
import {
  Button,
  FlexColumn,
  HeadingBold,
  HeadingRedCursive,
  HeadingSmall,
} from "../../../shared";

export const SearchHeader = ({
  selected,
  openFavorites,
  AddNewFav,
  image,
}: any) => {
  return (
    <FlexColumn style={{ alignItems: "center" }}>
      <SearchImage>
        <img src={image} alt="Discover the Planet" />
      </SearchImage>
      <SearchHeading>
        <HeadingBold>
          Explore<HeadingRedCursive>new</HeadingRedCursive> PLACES
        </HeadingBold>{" "}
      </SearchHeading>
      <Selected>
        <HeadingSmall> Selected place: {selected?.name}</HeadingSmall>
        <div>
          <Button
            onClick={() =>
              AddNewFav({
                name: selected?.name,
                address: selected?.address,
              })
            }
          >
            Add to Favorites{" "}
            <FontAwesomeIcon icon={faHeart} style={{ color: "#ffaeb7" }} />
          </Button>
          <Button red onClick={() => openFavorites(true)}>
            View Favorites
          </Button>
        </div>
      </Selected>
    </FlexColumn>
  );
};
