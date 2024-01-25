import { Quiz } from './pages/quiz/quiz';
import { Score } from './pages/score/score';

import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/score' element={<Score />} />
    </Routes>

  )
}

export default App
