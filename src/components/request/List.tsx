// core
import { useState } from 'react'

// components
import Request from '@/components/request/Request'
import InfiniteScroll from 'react-infinite-scroll-component'

// interfaces
import { ListProps } from '@/components/request/interfaces'

function List({ requests, setCoords }: ListProps) {
  const visibleItems = 30

  const [count, setCount] = useState({
    prev: 0,
    next: visibleItems,
  })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(requests.slice(count.prev, count.next))
  const [isActiveId, setIsActiveId] = useState(0)

  const getMoreData = () => {
    if (current.length === requests.length) {
      setHasMore(false)
      return
    }

    setTimeout(() => {
      setCurrent(
        current.concat(
          requests.slice(count.prev + visibleItems, count.next + visibleItems)
        )
      )
    }, 2000)

    setCount((prevState) => ({
      prev: prevState.prev + visibleItems,
      next: prevState.next + visibleItems,
    }))
  }

  return (
    <div className="list h-40 xl:h-screen" id="list">
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={
          <h4 className="my-5 px-3 text-center text-2xl">Загружается...</h4>
        }
        scrollableTarget="list"
      >
        {current.length &&
          current.map((r) => {
            return (
              <Request
                key={r.id}
                item={r}
                setCoords={setCoords}
                setIsActiveId={setIsActiveId}
                isActiveId={isActiveId}
              />
            )
          })}
      </InfiniteScroll>
    </div>
  )
}

export default List
