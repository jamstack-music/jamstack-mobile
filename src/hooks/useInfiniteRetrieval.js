import { useState, useEffect } from 'react'
import { getNext } from '../data/spotify'

export default function useInfiniteRetrieval(initial) {
  const [next, setNext] = useState(initial)
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  const handleScroll = () => {
    if(
      (window.innerHeight + window.scrollY) >=
      (document.body.offsetHeight - 2000)
    ) {
      setLoading(true)
    }
  }
  useEffect(function windowListener() {
    window.addEventListener('scroll', () => handleScroll(), false)

    return function unListen() {
      window.removeEventListener('scroll', () => handleScroll(), false)
    }
  }, [])

  useEffect(function fetch() {
    if(loading){
      getNext(next).then(res => {
        const { items, next } = res
        const newList = items.map(item => {
          if(item.album) return item.album
          return item
        })

        setList([...list, ...newList])
        setLoading(false)
        setNext(next)
      })

    }
  }, [loading])

  return [list, loading]
}
