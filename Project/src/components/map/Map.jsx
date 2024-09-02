// src/map/Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; 


const markers = [
    { position: [42.5866, -83.1364], status: 'active', name: 'Property 1', description: 'Description for Property 1' },
    { position: [42.5592, -83.0166], status: 'pending', name: 'Property 2', description: 'Description for Property 2' },
    { position: [42.6074, -82.8892], status: 'sold', name: 'Property 3', description: 'Description for Property 3' },
    { position: [42.5800, -83.1000], status: 'active', name: 'Property 4', description: 'Description for Property 4' },
    { position: [42.5700, -83.0500], status: 'pending', name: 'Property 5', description: 'Description for Property 5' },
    { position: [42.5900, -83.1200], status: 'sold', name: 'Property 6', description: 'Description for Property 6' },
    { position: [42.6000, -83.0800], status: 'active', name: 'Property 7', description: 'Description for Property 7' },
    { position: [42.5600, -83.0400], status: 'pending', name: 'Property 8', description: 'Description for Property 8' },
    { position: [42.5900, -83.1500], status: 'sold', name: 'Property 9', description: 'Description for Property 9' },
    { position: [42.5750, -83.0700], status: 'active', name: 'Property 10', description: 'Description for Property 10' },
    { position: [42.5650, -83.1300], status: 'pending', name: 'Property 11', description: 'Description for Property 11' },
    { position: [42.5950, -83.1100], status: 'sold', name: 'Property 12', description: 'Description for Property 12' },
    { position: [42.5850, -83.1250], status: 'active', name: 'Property 13', description: 'Description for Property 13' },
    { position: [42.5720, -83.0950], status: 'pending', name: 'Property 14', description: 'Description for Property 14' },
    { position: [42.6000, -83.1400], status: 'sold', name: 'Property 15', description: 'Description for Property 15' },
];


const getMarkerColor = (status) => {
    switch (status) {
        case 'active': return 'green';
        case 'pending': return 'yellow';
        case 'sold': return 'red';
        default: return 'gray';
    }
};

const createCustomIcon = (status) => {
    return new L.DivIcon({
        className: 'custom-icon',
        html: `<div style="background-color: ${getMarkerColor(status)}; width: 12px; height: 12px; border-radius: 50%;"></div>`,
        iconSize: [12, 12],
    });
};

const Map = () => {
    
    const mapWidth = '100%'; 
    const mapHeight = '600px';

    return (
        <section className="map-section padding">
            <div className="map-container" style={{ width: mapWidth, height: mapHeight }}>
                 
                <MapContainer center={[42.5866, -83.1364]} zoom={12} style={{ height: '100%', width: '100%' }} zoomControl={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {markers.map((marker, index) => (
                        <Marker key={index} position={marker.position} icon={createCustomIcon(marker.status)}>
                            <Popup>
                                <div>
                                    <strong>{marker.name}</strong><br />
                                    {marker.description}
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                    <ZoomControl position="bottomright" />
                </MapContainer>
                <div className="map-footer">This map can show the most recent 100 listings and 100 sales.</div>
                <div className="map-legend">
                    <div><span className="legend-icon active"></span> Active</div>
                    <div><span className="legend-icon pending"></span> Pending</div>
                    <div><span className="legend-icon sold"></span> Sold</div>
                </div>
            </div>
        </section>
    );
};

export default Map;
