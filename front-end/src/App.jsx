import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instructors" element={<Show />} />
            <Route path="/languages/edit" element={<Edit />} />
            <Route path="/languages/new" element={<New />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;