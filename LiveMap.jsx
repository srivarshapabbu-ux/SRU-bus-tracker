import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom Marker Icon
const busIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3448/3448339.png',
    iconSize: [35, 35],
});

const LiveMap = ({ buses }) => {
  const center = [17.9689, 79.5941]; // SR University Coordinates

  return (
    <div className="h-full w-full rounded-3xl overflow-hidden border shadow-lg">
      <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {buses.map(bus => (
          bus.status !== 'inactive' && (
            <Marker key={bus.id} position={[bus.lat, bus.lng]} icon={busIcon}>
              <Popup>
                <b>{bus.id}</b> <br /> 
                Status: {bus.status} <br />
                Next: {bus.nextStop}
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default LiveMap;