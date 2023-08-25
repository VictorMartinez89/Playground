import { useState } from 'react'
import Pizza from './Pizza'

import './App.css'

function App() {
  const [contador, setContador] = useState(0)

return (
  <>
  <h1>Pizzerias Victorinos</h1>
  <Pizza/>
  </>
  )
}

export default App
