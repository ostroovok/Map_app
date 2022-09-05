import React, { useEffect } from "react";
import { LayersControl, TileLayer, useMap } from "react-leaflet";

const Layers: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    map.invalidateSize();
  });

  return (
    <LayersControl position="topright">
      <LayersControl.BaseLayer name="Open street map" checked>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="2Gis">
        <TileLayer
          attribution={"&copy; <a>2GIS</a> contributors"}
          subdomains={["0", "1", "2", "3"]}
          url={"http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}"}
        />
      </LayersControl.BaseLayer>
    </LayersControl>
  );
};

export default Layers;
