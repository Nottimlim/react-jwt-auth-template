import { useContext } from 'react';
import { AuthedUserContext } from '../../App';
import { Link } from 'react-router-dom';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.username}</span>
          <button onClick={handleSignout}>Sign Out</button>
        </>
      ) : (
        <>
        <Link to={"/"}>Home</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
