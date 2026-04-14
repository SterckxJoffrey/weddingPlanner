

import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import GuestPage from "./pages/GuestPage"
import WeddingPage from "./pages/WeddingPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Navbar from "./components/Navbar"
import VendorPage from "./pages/VendorPage"
import BudgetPage from "./pages/BudgetPage"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guests" element={<GuestPage />} />
        <Route path="/weddings" element={<WeddingPage />} />
        <Route path="/vendors" element={<VendorPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App