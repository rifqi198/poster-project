import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import Search from './pages/Search/Search'
import Layout from './layout/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/movies/:id' Component={Movies}/>
          <Route path='/search' Component={Search}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
