import { useState } from 'react'
import './App.css'
import FilmForm from './components/FilmForm';
import FilmList from './components/FilmList';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';


function App() {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <div className="navbar bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `text-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:text-white rounded-lg px-6 py-3 ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                        : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/watchlist" 
                  className={({ isActive }) => 
                    `text-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:text-white rounded-lg px-6 py-3 ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                        : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  WATCHLIST
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/watched" 
                  className={({ isActive }) => 
                    `text-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:text-white rounded-lg px-6 py-3 ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                        : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  WATCHED
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/watchlist" element={<Watchlist watched={false} />} />
          <Route path="/watched" element={<Watched watched={true} />} />
        </Routes>
      </div>
    </>
  );
}

export default App