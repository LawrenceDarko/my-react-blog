import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="navbar">
          <h1>Quame Blog</h1>
          <div className="links">
              <Link to="/">Home</Link>
              <Link to="/create" style={{color: '#fff', backgroundColor: '#f1235d', borderRadius: '8px'}}>Create Blog</Link>
          </div>
      </nav>  
    );
}

export default Navbar
