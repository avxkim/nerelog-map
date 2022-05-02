// icons
import { PhotographIcon } from '@heroicons/react/solid'

// interfaces
import { RequestProps } from './interfaces'

function Request({ item, setCoords, isActiveId, setIsActiveId }: RequestProps) {
  const itemClickHandler = () => {
    setIsActiveId(item.id)
    setCoords([item.coords.lat, item.coords.long])
  }

  return (
    <div
      className={`flex items-center border-b-2 p-3 cursor-pointer hover:bg-gray-100 ${
        isActiveId === item.id ? 'bg-gray-100' : ''
      }`}
      onClick={() => itemClickHandler()}
    >
      <div className="flex items-center basis-3/4">
        <PhotographIcon className="h-5 w-5 mr-3" />
        <div className="text-xl font-bold">{item.name}</div>
      </div>
      <div className="basis-1/4 px-3 text-sm text-gray-400">
        {item.type === 'delivery' ? 'Доставка' : 'Забор'}
      </div>
      <div className="basis-1/5 font-semibold text-right">{item.price} ₸</div>
    </div>
  )
}

export default Request
