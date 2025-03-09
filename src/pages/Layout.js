import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <div className="">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <ul className="navbar-nav mr-auto" style={{marginLeft:"20px"}}>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fracking">Fracking</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link"to="/Initiatives">Initiatives</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link"to="/Leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/Game">Game</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link"to="/Petition">Petition</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link"to="/Merch">Merch</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </>
    )
  };
  
  export default Layout;