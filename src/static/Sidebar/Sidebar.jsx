import "./Sidebar.css"
import { Link } from "react-router-dom";
import {useState} from "react"
import { Menu } from "lucide-react";
// import { SidebarOpen } from "lucide-react"


const Sidebar = ({isOpen, closeSidebar}) => {
     const [sidebarOpen, setSidebarOpen] = useState(false)


  return (
    
    

    <aside className={`sidebar ${isOpen ? "open" : ""}`}>

      
         <button className="hamburger" onClick={() =>setSidebarOpen(!sidebarOpen)}>
      <Menu />
    </button>
     {/* <Sidebar isOpen={sidebarOpen}
        closeSidebar={()=> setSidebarOpen(false)}
         />  */}

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