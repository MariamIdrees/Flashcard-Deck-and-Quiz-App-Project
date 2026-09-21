import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./static/Sidebar/Sidebar"
import Dashboard from "./pages/dashboard/Dashboard";
import Mydecks from "./pages/Mydecks/Mydecks"
import Review from "./pages/Review/Review"
import Statistics from "./pages/Statistics/Statistics"


const App = () => {
  return (
    <BrowserRouter>
      <div className="dashboardContainer">
        <Sidebar />
        <div className="dashboard">
          <main className="mainContent">
            <Routes>
              <Route path="/" element={
                <>
                  <p>GOOD MORNING</p>
                  <div className="dashboardHeader">
                    <h1>Ready to learn?</h1>
                    <button className="newDeck">+ New Deck</button>
                  </div>
                </>
              } />
              <Route path="/Mydecks" element={<Mydecks />} />
              <Route path="/Review" element={<Review />} />
              <Route path="/Statistics" element={<Statistics />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
