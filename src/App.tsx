import Logo from "./assets/latavola.svg"

import { ItemMenu } from "./components/itemMenu"
import { CardInit } from "./components/cardInit"

export function App() {
  return (
    <>
    <header className="bg-white-600 w-full px-6 py-4 flex items-center justify-around">
      <img src={Logo} alt="" width={65}/>
      <ItemMenu
        url=""
        title="Início"
      />
      <ItemMenu
        url=""
        title="Cardápio"
      />
      <ItemMenu
        url=""
        title="Sobre"
      />
      <ItemMenu
        url=""
        title="Links e contatos"
      />
    </header>
    <main className="flex items-center justify-center py-40 px-6 border border-black w-full flex-wrap">
      <div className="w-1/2 flex flex-col items-center">
        <h1 className="text-emerald-700 font-extrabold text-5xl flex items-center flex-wrap-reverse justify-center">
          La <span className="text-red-600">Tavola</span>
          <img src="" alt="" width="" className="ml-6" />
        </h1>
        <p className="font-bold text-xl">Pizzaria</p>
      </div>
      <div className="w-1/2 flex flex-col items-start px-6 gap-4">
        <p className="text-justify drop-shadow-xl font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, exercitationem voluptates. Dolore earum facere adipisci maiores eum optio ab commodi, nemo molestias cupiditate ea maxime voluptates quia? Fugiat, vitae enim?</p>
        <button className="bg-red-600 py-2 px-4 rounded-md font-semibold text-white drop-shadow-xl hover:bg-transparent hover:ring-2 ring-red-600 hover:text-red-600 transition-colors duration-500">Ver Cardápio</button>
      </div>
    </main>
    </>
  )
}