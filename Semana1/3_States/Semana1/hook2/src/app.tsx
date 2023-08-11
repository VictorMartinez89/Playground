import { useState } from 'preact/hooks'

import './app.css'
import Hijo from './Hijo'
import Cumpleanos from './Cumpleanos'

export function App() {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(31)
  const [name, setName] = useState("Luisa")

  return (
    <>
     


      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
     
      <div class="card2">
      <button onClick={() => setCount((count) => count - 1)}>
        count is {count}
      </button>
      </div>
      <div>
        <Hijo  count={count} setCount={setCount}/>
      </div>
      <div class="card3">
        <button onClick={() => setAge((age) => age + 1)}>
          La cumpleaños es {age} años!!!
          <Cumpleanos />
      </button>

     
      </div>

    
    </>
  )
}
