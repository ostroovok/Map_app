import React, { useEffect } from 'react';
import { LayersControl, TileLayer, useMap } from 'react-leaflet';

const Layers: React.FC = () => {
	const map = useMap();

	useEffect(() => {
		setTimeout(() => map.invalidateSize(), 1);
	});

	return (
		<LayersControl position={'topright'}>
			<LayersControl.BaseLayer checked name={'Open street map'}>
				<TileLayer
					attribution={
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					}
					url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
					id={'osm-layer'}
				/>
			</LayersControl.BaseLayer>
			<LayersControl.BaseLayer name={'2Gis'}>
				<TileLayer
					attribution={'&copy; <a>2GIS</a> contributors'}
					subdomains={['0', '1', '2', '3']}
					url={'http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}'}
					id={'2gis-layer'}
				/>
			</LayersControl.BaseLayer>
		</LayersControl>
	);
};

export default Layers;
