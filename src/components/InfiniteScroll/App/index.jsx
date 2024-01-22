import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { getRange } from '../getRange.js'
import { Typography } from '@mui/material'

export default function InfiniteScroll() {
  const [lastNumber, setLastNumber] = useState(100)
  const [isLoading, setIsLoading] = useState(false)

  const numbers = getRange(0, lastNumber)

  const fetchFunc = () => {
    setIsLoading(true)
    setTimeout(() => {
      setLastNumber(lastNumber + 10)
      window.scrollBy(0, -150)
      setIsLoading(false)
    }, 2000)
  }

  const { ref, inView } = useInView({
    onChange: (inView) => {
      if (inView) {
        fetchFunc()
      }
    },
  })

  return (
    <>
      {numbers.map((item) => (
        <Typography key={Math.random()}>{item}</Typography>
      ))}
      {
        isLoading
          ? <Typography>Loading...</Typography>
          : <Typography ref={ref}>Видимость - {inView ? "видно" : "не видно"}</Typography>
      }

    </>
  )
}
