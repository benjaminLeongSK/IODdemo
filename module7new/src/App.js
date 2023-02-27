import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import Dashboard from './Dashboard';
import Nav from './Nav';
import NewPost from './NewPost';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="content">
            <Routes>
              <Route path="/" element={<Posts />}></Route>
              <Route path="/posts" element={<NewPost />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
