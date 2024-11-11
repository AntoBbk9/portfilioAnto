import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/home'
import Header from './components/header/header'
import About from './components/pages/about'
import ProjetDeveloppement from './components/developpementWeb-Projects'
import ProjetDesign from './components/designWeb-Project'

function App() {

  return (
   <BrowserRouter>
      <div>
      <Header />
      <Routes>
      <Route>
        <Route path='/' element={<Home />}>
          <Route path="projets-developpement" element={<ProjetDeveloppement />} />
          <Route path="projets-design" element={<ProjetDesign />} />
        </Route>
        <Route path='/about' element={<About />} />
      </Route>
      </Routes>
      </div>
   </BrowserRouter>
  )
}

export default App
