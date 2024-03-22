import AOS from 'aos'
import 'aos/dist/aos.css'


interface CardProps{
  'title':  string
  'icon':  string
}

export function CardInit(props: CardProps){
  AOS.init()
  return(
      <a
        className="flex flex-col items-center justify-center font-semibold text-xl p-6 gap-2 bg-red-600 hover:bg-red-500 transition-colors duration-500 rounded-lg w-[200px] h-[200px]"
        href="#" data-aos="fade-left">
          <img src={props.icon} alt="" width={65}/>
          <p className="text-white font-semibold text-xl drop-shadow-md">{props.title}</p>
      </a>
  )
}