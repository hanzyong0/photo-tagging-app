import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Puzzle from './components/Puzzle';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>
        <Route path="game" >
          <Route path=":id" element={<Puzzle />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
