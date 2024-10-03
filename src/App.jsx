import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Notfound from "./Components/NotFound"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
