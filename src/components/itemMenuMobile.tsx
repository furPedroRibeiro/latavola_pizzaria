interface propsItem{
  url: string
  title: string
}
export function ItemMenuMobile(props: propsItem){
  return(
    <>
    <a href={props.url} className="font-semibold text-white text-lg drop-shadow-xl px-2 py-1 flex flex-col">{props.title}</a>
    </>
  )
}