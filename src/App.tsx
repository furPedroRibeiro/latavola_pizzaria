import Logo from "./assets/logoTeste.png"

import Menu from "./assets/icons_cards/menu.svg"
import Moto from "./assets/icons_cards/motorcycle.svg"
import Home from "./assets/icons_cards/home.svg"
import Order from "./assets/icons_cards/order.svg"

import { ItemMenu } from "./components/itemMenu"
import { CardInit } from "./components/cardInit"
import { useState } from "react"
import { ItemMenuMobile } from "./components/itemMenuMobile"


export function App() {
  const[showMenu, setShowMenu] = useState(false)

  function handleShowMenu(){
    setShowMenu(true)
    if(showMenu == true){
      setShowMenu(false)
    }
  }
  return (
    <>
    <nav className={showMenu ? ("flex flex-col absolute z-10 h-screen w-full ml-0 bg-red-600 transition-all duration-700") : ("flex flex-col absolute z-10 h-screen w-full ml-[100vw] bg-red-600 transition-all duration-700")}>
      <div className="flex items-center justify-between w-full px-6 py-6">
        <img src={Logo} alt="" width={200}/>
        <button onClick={handleShowMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34" fill="white">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
        </button>
      </div>
      <div className="flex flex-col h-full w-full items-center justify-center gap-10">
        <ItemMenuMobile
          url="./"
          title="Início"
        />
        <ItemMenuMobile
          url="../cardapio/"
          title="Cardápio"
        />
        <ItemMenuMobile
          url="../sobre"
          title="Sobre"
        />
        <ItemMenuMobile
          url="../links"
          title="Links e contatos"
        />
      </div>
    </nav>
    <header className="bg-red-600 w-full px-6 py-4 flex items-center justify-around flex-wrap h-[18vh]">
      <img src={Logo} alt="" width={200}/>
      <ItemMenu
        url="./"
        title="Início"
      />
      <ItemMenu
        url="../cardapio/"
        title="Cardápio"
      />
      <ItemMenu
        url="../sobre"
        title="Sobre"
      />
      <ItemMenu
        url="../links"
        title="Links e contatos"
      />
      <button onClick={handleShowMenu} className="btnOpenMenu md:hidden" id="buttonMenu" aria-label="Abrir menu">
        <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="35" height="4" rx="2" fill="white"/>
          <rect y="10" width="35" height="4" rx="2" fill="white"/>
          <rect x="7" y="20" width="28" height="4" rx="2" fill="white"/>
        </svg>
      </button>
    </header>
    <main className="flex flex-col items-center justify-center w-full flex-wrap bg-white-600">
      <div className="w-full flex flex-col items-center justify-center px-6 gap-8 h-[82vh]">
        <img src={Logo} alt="" width={200} className="md:w-[300px]"/>
        <p className="text-center drop-shadow-xl font-semibold">Seja bem vindo a pizzaria La Tavola, aqui você encontra produtos e profissionais de qualidade, prontos pra pra te proporcionar experiências e sabores únicos. Trabalhamos com delivery e retira, fique a vontade!!</p>
        <button className="bg-red-600 py-2 px-4 rounded-md font-semibold text-white drop-shadow-xl hover:bg-transparent hover:ring-2 ring-red-600 hover:text-red-600 transition-colors duration-500">Ver Cardápio</button>
      </div>
    <span className={showMenu ? ("hidden") : ("block")}>
      <div className="w-full flex items-center justify-center gap-8 py-20 bg-red-600 flex-wrap">
          <CardInit
            icon={Moto}
            title="Serviços"
          />
          <CardInit
            icon={Home}
            title="Endereço" 
          />
          <CardInit
            icon={Menu}
            title="Cardápio" 
          />
          <CardInit
            icon={Order}
            title="Fazer pedido" 
          />
      </div>
      </span>
    </main>
    </>
  )
  /* Seja bem vindo a pizzaria La Tavola, aqui você encontra produtos e profissionais de qualidade, prontos pra pra te proporcionar experiências e sabores únicos. Localizada em Peruíbe e aberta desde 2021, a La Tavola tem o melhor a oferecer no serviço de delivery e retira de pizzas, fique a vontade pra explorar nosso mundo. */
}