import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Specialties from "./pages/Specialties"
import Users from "./pages/Users"
import UserDetails from "./pages/UserDetails"

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="especialidades" element={<Specialties />} />
      <Route path="usuarios" element={<Users />} />
      <Route path="usuarios/detalhe" element={<UserDetails />} />
    </Routes>
  </BrowserRouter>
)

export default Router
