import logo from './logo.svg';
import './App.css';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import ListMusic from './components/ListMusic';
import AddMusic from './components/AddMusic';

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
       
        <Navbar />
          <Routes>
              <Route element={<Navigate to="/login" />} path="/" />
              <Route element={<Login />} path="login" />
              <Route element={<Signup />} path="signup" />
              <Route element={<ListMusic />} path="listmusic" />
              <Route element={<AddMusic />} path="addmusic" />

          </Routes>
      </BrowserRouter>

      </AnimatePresence>
  );
}

export default App;
