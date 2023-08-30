import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Blog from './Blog'
import Contact from './Contact'
import Home from './Home'
import NoPage from './NoPage'
import Layout from './Layout'
import './App.css'

function App() {

  return (
    <> 
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/blog/' element={<Blog />}/>
          <Route path='/contact/' element={<Contact />}/>
          <Route path='*' element={<NoPage />}/>


        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
