import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginWrapper from './auth/LoginWrapper.js'
import { createContext, useState } from 'react';
import NotFound from './components/NotFound.js';
import Profile from './private-routes/Profile.js';
import NavBar from './public-routes/NavBar.js';

export const AuthContext = createContext()
function App() {

  const [isLoogedIn, setIsLoggedIn] = useState(() => Boolean(localStorage.getItem('token')))

  return (
    <div className="App">

      <AuthContext.Provider value={{ isLoogedIn, setIsLoggedIn }}>
        <LoginWrapper>
          <BrowserRouter>
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LoginWrapper>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
