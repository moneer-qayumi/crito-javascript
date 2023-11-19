import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import NotFound from './views/NotFound'
import Contact from './views/Contact'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      
     
    </BrowserRouter>
  )
}

export default App
