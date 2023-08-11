
import './App.css'
import Event from './Event'
import Form from './Form'

function App() {
 

  return (
    <div className='App'>
      <h1>
        Conociendo Evento y Formulario en React
      </h1>

      <Event />
      <Event numero="1" />
      <Event numero="2" />

      <Form numero="3"/>

    </div>
  )
}

export default App
