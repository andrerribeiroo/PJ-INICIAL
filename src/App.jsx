import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sou foda</h1>
      <p>Lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore lore</p>
      <MyComponent/>
    </>
  )
}

export default App
