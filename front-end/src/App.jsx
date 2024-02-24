import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
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