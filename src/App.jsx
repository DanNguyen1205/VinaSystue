import { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/AboutUs'
import './image-slider.css'






function App() {
  const client = new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus: false,
    }
  } });


  return (
    <>
    {/* <AppContext.Provider> */}
    <QueryClientProvider client={client}>
        <Router>
          <Navbar/>
          <Routes>
          <Route path='/VinaSystue' element={ <Home/> }></Route>
          <Route path='/VinaSystue/AboutUs' element={ <About/> }></Route>

          </Routes>

          <Footer/>
        </Router>

      </QueryClientProvider>
    {/* </AppContext.Provider> */}
    </>
  )
}

export default App
