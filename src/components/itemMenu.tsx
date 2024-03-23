import ('./css/itemMenu.css')

interface propsItem{
  url: string
  title: string
}
export function ItemMenu(props: propsItem){
  return(
    <>
    <a href={props.url} className="itemMenu font-semibold text-white text-lg transition-all duration-300 drop-shadow-xl px-2 py-1 md:flex flex-col hidden">{props.title}</a>
    </>
  )
}