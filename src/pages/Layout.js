import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Fracking">Fracking</Link>
            </li>
            <li>
              <Link to="/Initiatives">Initiatives</Link>
            </li>
            <li>
              <Link to="/Leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/Petition">Petition</Link>
            </li>
            <li>
              <Link to="/Merch">Merch</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;