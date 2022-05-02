export interface RequestProps {
  item: Request
  setCoords?: any
  isActiveId?: any
  setIsActiveId?: any
}

export interface ListProps {
  requests: Request[]
  setCoords?: any
  children?: JSX.Element | JSX.Element[]
}

export interface Request {
  id: number
  name: string
  price: number
  type: string
  coords: Coords
}

interface Coords {
  lat: number
  long: number
}
