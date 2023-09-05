import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import UserDetails from "./pages/UserDetails"

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Users />} path="users" />
      <Route element={<UserDetails />} path="users/:id" />
    </Routes>
  </BrowserRouter>
)

export default Router
