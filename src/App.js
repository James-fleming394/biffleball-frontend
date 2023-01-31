import './App.css';
import Navbar from './components/Navbar';
import { CheckSession } from './services/auth.js';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Footer from './components/Footer';
import Rules from './pages/Rules';
import Community from './pages/Community';
import Submit from './pages/Submit';
import Standings from './pages/Standings';
import Annoucements from './pages/Annoucement';
import Blog from './pages/Blog';
import Questions from './pages/Questions';
import Stats from './pages/Stats';


function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  };

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <>
    <div className="App">
      <Navbar
        authenticated={authenticated}
        user={user}
        handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/standings" element={<Standings />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/submit-pick" element={<Submit />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/community-annoucements" element={<Annoucements />}></Route>
        <Route path="/community-blog" element={<Blog />}></Route>
        <Route path="/community-questions" element={<Questions />}></Route>
        <Route path="/rules" element={<Rules />}></Route>
      </Routes>
    </div>
    <div>
    <Footer />
    </div>
    </>
  );
}

export default App;
