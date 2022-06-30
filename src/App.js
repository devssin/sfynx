import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Home, Join, Society, Team } from './pages'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Join />} />
        <Route path='/home' element={<Home />} />
        <Route path='/society' element={<Society />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </Router>
  )


}

export default App;
