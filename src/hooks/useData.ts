import { AxiosRequestConfig, CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

// interface FetchResponse<T> {
//   count: number
//   results: T[]
// }

const useData = (
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  // optionl ?
  deps?: any[]
) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(
    () => {
      const controller = new AbortController()

      setLoading(true)
      apiClient
        .get(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results)
          setLoading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return
          setError(err.message)
          setLoading(false)
        })

      return () => controller.abort()
    },
    deps? [...deps] : []
  )

  return { data, error, isLoading }
}

export default useData
