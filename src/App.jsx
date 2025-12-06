import { BrowserRouter, Routes, Route} from 'react-router-dom'

import GlobalProvider from './state/globalProvider.jsx'

import Catalog from './pages/Catalog.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Admin from './pages/Admin.jsx'
import Cart from './pages/Cart.jsx'

import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'

import './App.css'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path='/' element= {<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/catalog' element={<Catalog/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/admin' element={<Admin/>}></Route>
              <Route path='*' element={<NotFound/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App
