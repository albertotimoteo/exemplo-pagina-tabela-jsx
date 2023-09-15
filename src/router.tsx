import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Kanban from "./pages/kanban"

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="kanban" element={<Kanban />} />
    </Routes>
  </BrowserRouter>
)
