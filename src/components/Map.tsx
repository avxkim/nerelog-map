import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'

// interfaces
import { ListProps } from '@/components/request/interfaces'

const Map = ({ requests, children }: ListProps) => {
  return (
    <MapContainer
      center={[43.238949, 76.889709]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerClusterGroup showCoverageOnHover={false} chunkedLoading={true}>
        {requests.length &&
          requests.map((r) => (
            <Marker key={r.id} position={[r.coords.lat, r.coords.long]}>
              <Tooltip position={[r.coords.lat, r.coords.long]}>
                <div className="xl:text-xl">
                  <div>
                    ID: <span className="font-semibold">{r.id}</span>
                  </div>
                  <div>
                    Название клиента:{' '}
                    <span className="font-semibold">{r.name}</span>
                  </div>
                  <div>
                    Цена заказа:{' '}
                    <span className="font-semibold">{r.price} ₸</span>
                  </div>
                </div>
              </Tooltip>
            </Marker>
          ))}
        {children}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Map
