import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/instructors" element={<Instructors />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;