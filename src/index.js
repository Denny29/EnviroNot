import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import {Fracking} from "./pages/Fracking";
import Initiatives from "./pages/Initiatives";
import Leaderboard from "./pages/Leaderboard";
import Petition from "./pages/Petition";
import Merch from "./pages/Merch";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Fracking" element={<Fracking />} />
          <Route path="Initiatives" element={<Initiatives />} />
          <Route path="Leaderboard" element={<Leaderboard />} />
          <Route path="Petition" element={<Petition />} />
          <Route path="Merch" element={<Merch />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);