import L from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.styles.scss";

const position: [number, number] = [51.505, -0.09];

const Map: React.FC = () => {
  return (
    <MapContainer
      attributionControl={false}
      center={position}
      className={"map"}
      crs={L.CRS.EPSG3857}
      maxZoom={18}
      minZoom={3}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
