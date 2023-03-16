import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paths/Home';
import AddBooks from './paths/AddBooks';
import UpdateBooks from './paths/UpdateBooks';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddBooks />}></Route>
          <Route path="/update/:bookId" element={<UpdateBooks />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
