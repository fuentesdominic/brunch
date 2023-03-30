import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CheckSession } from './services/Auth';
import Home from './pages/Home';
import Register from './pages/Register';
import RestaurantDetails from './pages/RestaurantDetails';
import SignIn from './pages/SignIn';
import About from './components/About';
import Navbar from './components/Navbar';
import RestaurantForms from './components/RestaurantForms';
import EditMenu from './components/EditMenu';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false);
    localStorage.clear();
  };

  const CheckToken = async () => {
    const payload = await CheckSession();
    setUser(payload);
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
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<RestaurantDetails />} />
          <Route path='detail/:id/editmenu' element={<EditMenu />} />
          <Route path='/create-restaurant' element={<RestaurantForms />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
