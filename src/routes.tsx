import React from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";


const Router: React.FC = () => {
  const navigate = useNavigate();

function HeaderView() {
  const { pathname } = useLocation();
  const locationFormmated = pathname.replace('/', '')
  localStorage.setItem("currentPage", locationFormmated);
  document.body.removeAttribute('class')
  document.body.classList.add(`${locationFormmated}`);

}

HeaderView()
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  )
}

export default Router