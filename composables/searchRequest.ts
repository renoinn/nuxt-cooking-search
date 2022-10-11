import { SearchRequest, SearchResponse } from '@/api/search'

export const searchRequest = async (query: string): Promise<SearchResponse> => {
  const params: SearchRequest = {
    q: query,
    start: 1,
    num: 10,
  }

  const data = await $fetch<SearchResponse>('https://${domain.api}/search', {params: params})

  return data
}
