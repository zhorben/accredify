import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'

export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data.data as T
}

export function createQueryHook<T>(url: string, queryKey: QueryKey) {
  return (options?: Omit<UseQueryOptions<T, Error>, 'queryKey' | 'queryFn'>) =>
    useQuery<T, Error>({
      queryKey,
      queryFn: () => fetchData<T>(url),
      ...options,
    })
}
