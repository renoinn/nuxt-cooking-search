import { SearchResponse } from '@/api/search'

export const useQuery = () => useState<string>('query', () => '')
export const useSearchResult = () => useState<SearchResponse>('searchResult', () => <SearchResponse>{})
