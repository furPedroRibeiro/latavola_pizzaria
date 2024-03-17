import { CardInit } from "./components/cardInit"
import Logo from "./assets/latavola.svg"
import Cardapio from "./assets/cardapio.svg"
import Sobre from "./assets/sobre.svg"
import IconLinks from "./assets/iconLink.svg"

export function App() {
  return (
    <>
    <header className="bg-red-600 w-full px-6 py-4 flex items-center justify-around">
      <img src={Logo} alt="" width={65}/>
      <a href="" className="font-bold text-white text-xl hover:bg-white hover:text-red-600 transition-colors duration-500 rounded-md drop-shadow-md px-2 py-1">Ínicio</a>
      <a href="" className="font-bold text-white text-xl hover:bg-white hover:text-red-600 transition-colors duration-500 rounded-md drop-shadow-md px-2 py-1">Cardápio</a>
      <a href="" className="font-bold text-white text-xl hover:bg-white hover:text-red-600 transition-colors duration-500 rounded-md drop-shadow-md px-2 py-1">Sobre</a>
      <a href="" className="font-bold text-white text-xl hover:bg-white hover:text-red-600 transition-colors duration-500 rounded-md drop-shadow-md px-2 py-1">Contatos</a>
    </header>
    <main className="flex flex-col items-center justify-center py-6 px-6">
      <h1 className="text-emerald-700 font-extrabold text-5xl flex items-center flex-wrap-reverse justify-center">
        La <span className="text-red-600">Tavola</span>
        <img src={Logo} alt="" width={70} className="ml-6" />
      </h1>
      <p className="font-bold text-xl">Pizzaria</p>
      <section className="flex flex-col items-center justify-center w-full py-6 gap-6">
        <CardInit
          title="Cardápio"
          image={Cardapio}
        />
        <CardInit
          title="Sobre"
          image={Sobre}
        />
        <CardInit
          title="Links e contatos"
          image={IconLinks}
        />
      </section>
    </main>
    </>
  )
}