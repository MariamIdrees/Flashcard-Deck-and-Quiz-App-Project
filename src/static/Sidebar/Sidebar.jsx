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
        
        <div className="sidebarLogo" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '40px' }}>
          <img src="/recallicon2.jpeg" alt="recall logo" />
          
          <div style={{ marginTop: '12px' }}>
            <Profile />
          </div>
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
            <span>Streak</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
