import React, { useRef, useState } from "react";
import {
  Marker,
  Popup,
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { HeadingSmall } from "../../../shared";

type MapLeafletProps = {
  coordinates: [number, number];
  places: Array<object>;
  setCoordinates: Function;
  setBounds: Function;
  setChildClicked: Function;
};

export const MapLeaflet = ({
  coordinates,
  places,
  setCoordinates,
  setBounds,
  setChildClicked,
}: MapLeafletProps) => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState(null);
  const [allMarkers, setAllMarkers] = useState(null);

  const blueIcon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  function DisplayMarkers(): any | null {
    const mMap = useMap();
    const map = useMapEvents({
      moveend() {
        setBounds(mMap.getBounds());
        setCoordinates(mMap.getCenter());
        // @ts-ignore
        const markers = allMarkers?.filter((m: any) =>
          map.getBounds().contains(m)
        );
        setMarkers(markers);
      },
    });

    return markers && places?.length > 0
      ? null
      : places.map((place: any, index) => (
          <Marker
            key={index}
            position={[place.latitude, place.longitude]}
            icon={blueIcon}
            eventHandlers={{
              click: (e) => {
                setChildClicked(place);
              },
            }}
          >
            <Popup>
              <HeadingSmall>{place.name}</HeadingSmall>
              <div style={{ height: "100px", width: "150px" }}>
                <img
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  src={
                    place.photo
                      ? place.photo.images.small.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
              </div>
              <p>Rating {Number(place.rating)}</p>
            </Popup>
          </Marker>
        ));
  }

  return (
    <MapContainer
      id="mapId"
      ref={mapRef}
      center={coordinates}
      zoom={16}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={false}
      dragging={true}
      zoomAnimation={true}
      easeLinearity={0.35}
    >
      <DisplayMarkers />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
