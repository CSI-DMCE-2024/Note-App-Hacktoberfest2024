import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/404";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* 404 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
