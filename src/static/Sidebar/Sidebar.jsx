import "./Sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/recallicon.jpeg" alt="recall logo" />
     
      </div>

      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link active">
          🏠
          <span>Dashboard</span>
        </Link>

        <Link to="/Mydecks" className="sidebar-link">
          📊
          <span>Mydecks</span>
        </Link>

        <Link to="/Review" className="sidebar-link">
          📚
          <span>Review</span>
        </Link>

        <Link to="/Statistics" className="sidebar-link">
          ⚙️
          <span>Statistics</span>
        </Link>
      </nav>

      <div className="sidebar-bottom">
        <a href="#" className="sidebar-link">
          🚪
          <span>Streak</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;