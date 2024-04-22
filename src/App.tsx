import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routes } from './router'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        {routes.map(route =>
          <Route path={route.path} element={route.element} />
        )}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
