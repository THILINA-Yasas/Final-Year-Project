import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="home" element={<Main page="home" />} />
          <Route path="categories" element={<Main page="categories" />} />
          <Route path="shop" element={<Main page="shop" />} />
          <Route path="activity" element={<Main page="activity" />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
