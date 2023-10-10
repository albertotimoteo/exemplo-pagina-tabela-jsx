import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Specialties from "./pages/Specialties"

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="especialidades" element={<Specialties />} />
      <Route path="especialidades/visualizar/:id" element={<Specialties />} />
      <Route path="planos/criar/:tipo" element={<Specialties />} />
    </Routes>
  </BrowserRouter>
)

export default Router
