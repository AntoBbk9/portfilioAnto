import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/home'
import Header from './components/header/header'
import About from './components/pages/about'
import ProjetDeveloppement from './components/developpementWeb-Projects'
import ProjetDesign from './components/designWeb-Project'
import Projects from './components/pages/projects'

function App() {

  return (
   <BrowserRouter>
      <div>
      <Header />
      <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />}>
          <Route path="projects-development" element={<ProjetDeveloppement />} />
          <Route path="projects-design" element={<ProjetDesign />} />
        </Route>
        <Route path='/about' element={<About />} />
      </Route>
      </Routes>
      </div>
   </BrowserRouter>
  )
}

export default App
