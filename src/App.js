import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CheckSession } from './services/Auth';
import Home from './pages/Home';
import Register from './pages/Register';
import RestuarantDetails from './pages/RestuarantDetails';
import SignIn from './pages/SignIn';
import About from './components/About';
import Navbar from './components/Navbar';
import RestaurantForms from './components/RestaurantForms';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false);
    localStorage.clear();
  };

  const CheckToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      CheckToken();
    }
  }, []);

  return (
    <div>
      <Navbar 
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
        />
      <main>
        <Routes>
          <Route path='/' 
            element={
            <SignIn 
              setUser={setUser}
              user={user}
              authenticated={authenticated}
              toggleAuthenticated={toggleAuthenticated} /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
