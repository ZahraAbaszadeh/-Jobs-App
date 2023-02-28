import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import JobList from "./Components/JobList";
import JobDetails from "./Components/JobDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:position" element={<JobDetails />} />
      </Routes>
    </>
  );
}

export default App;
