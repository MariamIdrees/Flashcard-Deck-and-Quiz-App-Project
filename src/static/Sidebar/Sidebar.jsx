import Profile from "../../components/reusable/flashcard/Profile.jsx";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  BookOpenCheck,
  ChartNoAxesCombined,
  Flame,
  House,
  Menu,
  PanelsTopLeft,
  X,
} from "lucide-react";

const navigation = [
  { to: "/dashboard", label: "Dashboard", Icon: House, end: true },
  { to: "/Mydecks", label: "Mydecks", Icon: PanelsTopLeft },
  { to: "/Review", label: "Review", Icon: BookOpenCheck },
  { to: "/Statistics", label: "Statistics", Icon: ChartNoAxesCombined },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [streak, setStreak] = useState(0);

useEffect(() => {
  const updateStreak = () => {
    const savedActivity = localStorage.getItem("studyActivity");

    if (!savedActivity) {
      setStreak(0);
      return;
    }

    const activity = JSON.parse(savedActivity);

    if (activity.length === 0) {
      setStreak(0);
      return;
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

    setStreak(currentStreak);
  };

  updateStreak();

  window.addEventListener("studyActivityUpdated", updateStreak);

  return () => {
    window.removeEventListener("studyActivityUpdated", updateStreak);
  };
}, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <button
        className="sidebarTrigger"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="app-sidebar"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <button
          className="sidebarBackdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        id="app-sidebar"
        className={`sidebar ${isOpen ? "open" : ""}`}
        aria-label="Main navigation"
      >
<<<<<<< HEAD
        
        <div className="sidebarLogo" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '40px' }}>
          <img src="/recallicon2.jpeg" alt="recall logo" />
          
          <div style={{ marginTop: '12px' }}>
            <Profile />
          </div>
=======
        <div className="sidebarLogo">
          <img src="/recallicon3.jpeg" alt="recall logo" />
>>>>>>> 779125cbb1e1cac3cfc2d81df41139250b89d201
        </div>

        <nav className="sidebarNav">
          {navigation.map(({ to, label, Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `sidebarLink${isActive ? " active" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              <Icon size={19} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebarBottom">
          <div className="sidebarLink sidebarStatus">
            <Flame size={19} aria-hidden="true" />
            <span>Streak: {streak} days</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
