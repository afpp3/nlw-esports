import logoImg from '@/assets/logo-nlw-esports.svg'
import { GameBanner } from '@/components/game-banner'
import { CreateAdBanner } from '@/components/create-ad-banner'
import { useGamesQuery } from './queries'

export const LandingPage = () => {
  const { data: games, isError } = useGamesQuery()

  if (games) {
    return (
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logoImg} alt="NLW ESPORTS" />

        <h1 className="text-6xl text-white font-black mt-20">
          Seu
          <span className="text-transparent bg-clip-text bg-nlw-gradient">
            duo
          </span>
          está aqui
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map((game) => (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              ads={game._count.ads}
            />
          ))}
        </div>

        <CreateAdBanner />
      </div>
    )
  }

  if (isError) {
    return <div>Ops, ocorreu um erro ao buscar as informações</div>
  }

  return <div>Carregando</div>

  // return null
}
