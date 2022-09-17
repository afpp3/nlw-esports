type GameBannerProps = {
  title: string
  bannerUrl: string
  ads: number
}

export const GameBanner = (props: GameBannerProps) => {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt={props.title} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
        <strong className="font-bold block text-white">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">{props.ads}</span>
      </div>
    </a>
  )
}
