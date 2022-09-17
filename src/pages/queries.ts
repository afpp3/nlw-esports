import { instance } from '@/services/axios-config'
import { useQuery } from '@tanstack/react-query'

type Game = {
  id: number
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

type Games = ReadonlyArray<Game>

const getGames = async (): Promise<Games> => {
  const response = await instance.get('/games')
  return response.data
}

export const useGamesQuery = () => useQuery(['games'], getGames)
