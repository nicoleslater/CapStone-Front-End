import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
function App() {
  

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Index />} />
            <Route path="/" element={<Show />} />
            <Route path="/" element={<Edit />} />
            <Route path="/" element={<New />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;