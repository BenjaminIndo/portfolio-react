import Layout from './components/Layout'
import './App.scss'
import '@fontsource/inter/400.css' //Normal
import '@fontsource/inter/600.css' //Semibold
import '@fontsource/inter/700.css' //Bold
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
