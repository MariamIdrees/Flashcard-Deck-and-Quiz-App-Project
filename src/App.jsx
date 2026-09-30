import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Sidebar from "./static/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Mydecks from "./pages/Mydecks/Mydecks";
import Review from "./pages/Review/Review";
import Statistics from "./pages/Statistics/Statistics";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";


const WorkspaceLayout = () => (
  <div className="dashboardContainer">
    <div className="sidebarWrap">
      <Sidebar />
    </div>
    <div className="dashboard">
      <main className="mainContent">
        <Outlet />
      </main>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<WorkspaceLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Mydecks" element={<Mydecks />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Statistics" element={<Statistics />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
