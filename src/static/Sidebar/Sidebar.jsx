import "./Sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebarLogo">
        <img src="/recallicon2.jpeg" alt="recall logo" />
     
      </div>

      <nav className="sidebarNav">
        <Link to="/" className="sidebarLink">
          🏠
          <span>Dashboard</span>
        </Link>

        <Link to="/Mydecks" className="sidebarLink">
          📊
          <span>Mydecks</span>
        </Link>

        <Link to="/Review" className="sidebarLink">
          📚
          <span>Review</span>
        </Link>

        <Link to="/Statistics" className="sidebarLink">
          ⚙️
          <span>Statistics</span>
        </Link>
      </nav>

      <div className="sidebarBottom">
        <a href="#" className="sidebarLink">
          🚪
          <span>Streak</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;