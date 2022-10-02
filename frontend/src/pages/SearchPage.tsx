import React, { useEffect, useState } from "react";
//
import SearchImage from "../assets/hero/hero_banner_search.jpg";
import { FlexRow } from "../components";
import { getPlaceData } from "../data/getPlaceData";
import {
  FavoritesList,
  SearchHeader,
  List,
  MapLeaflet,
} from "../components/Search/components";

type BoundsType = {
  _southWest: { lat: number; lng: number };
  _northEast: { lat: number; lng: number };
};
type CoordsType = [number, number];

export const SearchPage = () => {
  const [type, setType] = useState("restaurants");
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [coordinates, setCoordinates] = useState<CoordsType>([53.89, 27.56]);
  const [bounds, setBounds] = useState<BoundsType | null>(null);
  const [childClicked, setChildClicked] = useState(null);

  const [isViewingFavorites, setIsViewingFavorites] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);

  // Get favorites from localStorage
  useEffect(() => {
    const savedFavs = localStorage.getItem("Favorites");
    if (savedFavs) {
      const initialValue = JSON.parse(savedFavs);
      setFavoritesList(initialValue);
    }
  }, []);

  // Update localStorage
  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(favoritesList));
  }, [favoritesList]);

  // Add a new favorite to localStorage
  const AddPlaceToFavorites = (newPlace: any) => {
    let existingFavorites = [...favoritesList];
    let exists = existingFavorites.findIndex(
      (place: any) => place.address === newPlace.address
    );

    if (exists === -1) {
      // @ts-ignore
      existingFavorites.push(newPlace);
      setFavoritesList(existingFavorites);
    }
  };

  // Remove a favorite from localStorage
  const RemovePlaceFromFavorites = (place: any) => {
    let existingFavorites = [...favoritesList];
    // @ts-ignore
    let index = existingFavorites.indexOf(place);
    if (index > -1) {
      existingFavorites.splice(index, 1);
      setFavoritesList(existingFavorites);
    }
  };

  // Get coords from child
  useEffect(() => {
    if ("geolocation" in navigator && coordinates) {
      navigator.geolocation.getCurrentPosition((cPosition) => {
        setCoordinates([cPosition.coords.latitude, cPosition.coords.longitude]);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  //Get places details
  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlaceData(type, bounds?._northEast, bounds?._southWest)
        .then((data) => {
          setPlaces(
            data?.filter((place: any) => place.name && place.num_reviews > 0)
          );
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [type, setPlaces, bounds]);

  return (
    <>
      <SearchHeader
        selected={childClicked}
        openFavorites={(open: any) => setIsViewingFavorites(open)}
        AddNewFav={AddPlaceToFavorites}
        image={SearchImage}
      />
      <FlexRow
        start
        style={{
          width: "100%",
        }}
      >
        <List
          type={type}
          setType={(type: any) => {
            setType(type);
          }}
          isLoading={isLoading}
          places={places}
        />
        <div style={{ height: "550px", width: "100%" }}>
          <MapLeaflet
            coordinates={coordinates}
            places={places}
            setCoordinates={(coordinates: CoordsType) =>
              setCoordinates(coordinates)
            }
            setBounds={(bounds: any) => setBounds(bounds)}
            setChildClicked={(child: any) => setChildClicked(child)}
          />
        </div>
        {isViewingFavorites && (
          <FavoritesList
            setIsViewingFavorites={(open: any) => setIsViewingFavorites(open)}
            favoritesList={favoritesList}
            removeItem={RemovePlaceFromFavorites}
          />
        )}
      </FlexRow>
    </>
  );
};
