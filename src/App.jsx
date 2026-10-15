import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {
        id: 1,
        titulo: "Sistema de Estoque",
        descricao: "Controle de produtos e movimentações.",
        responsavel: "Ana",
        status: "Concluído",
        tecnologias: ["React", "Node.js", "PostgreSQL"],
        destaque: true
      }
    </>
  )
}

export default App
