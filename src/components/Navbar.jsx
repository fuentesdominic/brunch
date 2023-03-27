import { Link } from 'react-router-dom';

const Navbar = ({user, handleLogOut}) => {
  let userOptions;
  if (user) {
    userOptions = (
      <nav className='nav-links'>
        <Link className='nav-link' to='/home'>Home</Link>  
        <Link className='nav-link' to='/about'>About</Link>
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
    <div className="navbar">
      <div className="iconDiv">
      <h3 className="pageTitle">Brunch</h3>
      </div>
    </div>
  )
}
export default Navbar