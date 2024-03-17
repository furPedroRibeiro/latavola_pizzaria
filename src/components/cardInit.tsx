interface CardProps{
  'title':  string
  'image':  string
}

export function CardInit(props: CardProps){
  return(
      <a
        className="flex items-center justify-start font-semibold text-xl p-6 bg-emerald-600 hover:bg-emerald-500 transition-colors duration-500 w-full h-[100px] rounded-lg md:w-[350px]"
        href="#">
          <img src={props.image} alt="" width={65}/>
          <p className="text-white font-semibold text-xl ml-3 drop-shadow-md">{props.title}</p>
      </a>
  )
}