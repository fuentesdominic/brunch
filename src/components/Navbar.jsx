import { Link } from 'react-router-dom';

const Navbar = ({user, handleLogOut}) => {
  let userOptions;
  if (user) {
    userOptions = (
      <nav className='nav-links'>
        <Link className='nav-link' to='/home'>Home</Link>
        {/* <img className='homeIcon'src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png' alt=''/>   */}
        <Link className='nav-link' to='/about'>About</Link>
        <Link className='nav-link' to='/create-restaurant'>Add Restaurant</Link>
        {/* <img className='hammerIcon'src='https://cdn-icons-png.flaticon.com/512/969/969829.png' alt=''/> */}
        <Link className='nav-link' onClick={handleLogOut} to='/'>Sign Out</Link>    
        </nav>
    );
  }

  const publicOptions = (
    <nav className='nav-links'>
      <Link className='nav-link' to='/register'>Register</Link>
      <Link className='nav-link' to='/'>Sign In</Link>
      <Link className='nav-link' to='/about'>About</Link>
    </nav>
  );

  return (
    <header>
      <Link to='/'>
        <div className='logo-wrapper' alt='logo'></div>
      </Link>
      <div className='welcome-message-container'>
        {user && <h3 className='welcome-message'>Welcome {user.name}!</h3>}
      </div>
    <div className="nav-container">
      {user ? userOptions : publicOptions}
    </div>
    </header>
  )
}
export default Navbar