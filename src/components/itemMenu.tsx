import ('./css/itemMenu.css')

interface propsItem{
  url: string
  title: string
}
export function ItemMenu(props: propsItem){
  return(
    <>
    <a id="itemMenu" href={props.url} className="font-semibold text-red text-lg hover:text-red-600 transition-all duration-300 drop-shadow-xl px-2 py-1 flex flex-col">{props.title}</a>
    </>
  )
}