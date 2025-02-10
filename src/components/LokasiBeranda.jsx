import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  return (
    <div className=" px-6 relative pb-12">
      <MapContainer 
        center={[-7.805352, 110.384363]} 
        zoom={13} 
        className="h-[400px] w-full rounded-xl shadow-md"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-7.80553, 110.38381]}>
          <Popup>Asrama Mahasiswa Kabupaten Sambas</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
