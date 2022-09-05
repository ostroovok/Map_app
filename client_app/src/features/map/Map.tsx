import L from 'leaflet';
import React, { useEffect, useRef } from 'react';
import { MapContainer } from 'react-leaflet';
import { Layers } from './Layers';
import 'leaflet/dist/leaflet.css';
import './Map.styles.scss';

const position: [number, number] = [51.67204, 39.1843];

const Map: React.FC = () => {
	return (
		<MapContainer
			attributionControl={false}
			center={position}
			className={'map'}
			crs={L.CRS.EPSG3857}
			maxZoom={18}
			minZoom={3}
			zoom={13}
		>
			<Layers />
		</MapContainer>
	);
};

export default Map;
