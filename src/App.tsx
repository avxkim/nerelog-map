import { useEffect, useState } from 'react'
import './App.css'

// components
import List from '@/components/request/List'
import Map from '@/components/Map'
import { useMap } from 'react-leaflet'

// mock data
import requests from '@/mock/NeRelog_apps.json'
import clients from '@/mock/NeRelog_clients.json'

// requests with joined client
const requestsWithClient = requests.map(({ client_id, ...rest }) => {
  const clientName = clients.filter((c) => c.id === client_id)[0]

  return {
    ...rest,
    name: clientName?.name,
  }
})

function ChangeMapPosition({ coords }: any) {
  const map = useMap()

  if (coords.length) {
    map.setView(coords, 18)
  }

  return null
}

function App() {
  useEffect(() => {
    document.title = 'Nerelog Map'
  }, [])
  const [coords, setCoords] = useState([])

  return (
    <div className="container-fluid">
      <div className="grid grid-rows-1 grid-cols-1 xl:grid-cols-4">
        <div className="xl:col-span-1">
          <List requests={requestsWithClient} setCoords={setCoords} />
        </div>
        <div className="xl:col-span-3">
          <Map requests={requestsWithClient}>
            <ChangeMapPosition coords={coords} />
          </Map>
        </div>
      </div>
    </div>
  )
}

export default App
