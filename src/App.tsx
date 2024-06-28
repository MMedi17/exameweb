import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <ul>
    <li>Abra o VSCode</li>
    <li>Crie uma nova pasta</li>
    <li>Instale o Vite</li>
    <li>Utilizar os comandos <strong>Em ordem!!!</strong></li>
    <li>npm create vite@latest, em sequencia, aperte Y</li>
    <li>Digite um nome para o seu projeto</li>
    <li>Escolha o framework React</li>
    <li>após isso, "TypeScript + Swc"</li>
    <li>Digite os comandos "cd vite project", "npm install" e "npm run dev"</li>
    <li>Em seguida, abra a URL "localhost" que foi recebida</li>
    <li>Pronto! Agora comece com seus códigos.</li>
    <li>Após seu projeto estar pronto, vamos subi-lo para o GitHub e, em seguida, publicaremos no Vercel</li>
    <li>Salve seu projeto do VSCode na área de trabalho, isso facilitará a procura do projeto</li>
    <li>Abra o Github Desktop e coloque sua conta</li>
    <li>Selecione "Create a New Repository on your hard drive..."</li>
    <li>Selecione o projeto que você salvou</li>
   </ul>
    </>
  )
}

export default App
