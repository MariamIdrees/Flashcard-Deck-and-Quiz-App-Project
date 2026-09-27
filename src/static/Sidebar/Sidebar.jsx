import "./Sidebar.css"
import { Link } from "react-router-dom";
import {useState, useEffect} from "react"
import { Menu } from "lucide-react";
// import { SidebarOpen } from "lucide-react"


const Sidebar = ({isOpen, closeSidebar}) => {
     const [sidebarOpen, setSidebarOpen] = useState(false)
     const [streak, setStreak] = useState(0);
     const getCurrentStreak = () => {
  const savedActivity = localStorage.getItem("studyActivity");

  if (!savedActivity) {
    return 0;
  }

  const activity = JSON.parse(savedActivity);

  if (activity.length === 0) {
    return 0;
  }

  const dates = [...new Set(activity)].sort().reverse();

  let currentStreak = 0;
  let currentDate = new Date();

  for (let i = 0; i < dates.length; i++) {
    const dateString = currentDate.toISOString().split("T")[0];

    if (dates[i] === dateString) {
      currentStreak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return currentStreak;
};

useEffect(() => {
  const updateStreak = () => {
    setStreak(getCurrentStreak());
  };

  updateStreak();

  window.addEventListener("focus", updateStreak);

  return () => {
    window.removeEventListener("focus", updateStreak);
  };
}, []);

  return (
    
    

    <aside className={`sidebar ${isOpen ? "open" : ""}`}>

      
         <button className="hamburger" onClick={() =>setSidebarOpen(!sidebarOpen)}>
      <Menu />
    </button>
     {/* <Sidebar isOpen={sidebarOpen}
        closeSidebar={()=> setSidebarOpen(false)}
         />  */}

      <div className="sidebarLogo">
        <img src="/recallicon3.jpeg" alt="recall logo" />
     
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
          
         <span>🔥 {streak} Day streak</span>
        </a>
      </div>
       
      
   
    </aside>
  );
}

export default Sidebar;