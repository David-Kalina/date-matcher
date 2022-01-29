// useFetch hook with axios

import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = (url: string, options = {}) => {
  const [response, setResponse] = useState<any>({})
  const [error, setError] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    axios(url, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_TOKEN}`,
      },
    })
      .then(res => {
        setResponse(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { response, error, loading }
}
