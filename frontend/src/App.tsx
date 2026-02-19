import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
// import { Cta } from "./components/Cta";
// import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
// import { Hero } from "./components/Hero";
// import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
// import { Services } from "./components/Services";
// import { Sponsors } from "./components/Sponsors";
// import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import { LectureView } from "./components/lecture/LectureView";
import { Lecture } from "./types";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);

  if (selectedLecture) {
    return (
      <LectureView
        lecture={selectedLecture}
        onBack={() => setSelectedLecture(null)}
      />
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <About />
              <Features onLectureSelect={setSelectedLecture} />
              <Footer />
              <ScrollToTop />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
