import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { About } from "./components/About";
// import { Cta } from "./components/Cta";
// import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
// import { Services } from "./components/Services";
// import { Sponsors } from "./components/Sponsors";
// import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import { LectureView } from "./components/lecture/LectureView";
import { EarthquakeView } from "./components/lecture/slides/view/EarthquakeView";
import { VolcanoView } from "./components/lecture/slides/view/VolcanoView";
import { HydroView } from "./components/lecture/slides/view/HydroView";
import { Lecture } from "./types";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "@/hooks/navbar/useAuth";
import "./App.css";

function App() {
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);
  const { user, loading } = useAuth();

  if (selectedLecture) {
    if (selectedLecture.topic === "Earthquake") {
      return (
        <EarthquakeView
          lecture={selectedLecture}
          onBack={() => setSelectedLecture(null)}
        />
      );
    }

    if (selectedLecture.topic === "Volcano") {
      return (
        <VolcanoView
          lecture={selectedLecture}
          onBack={() => setSelectedLecture(null)}
        />
      );
    }

    if (selectedLecture.topic === "Flood") {
      return (
        <HydroView
          lecture={selectedLecture}
          onBack={() => setSelectedLecture(null)}
        />
      );
    }

    return (
      <LectureView
        lecture={selectedLecture}
        onBack={() => setSelectedLecture(null)}
      />
    );
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <>
                <Dashboard>
                  <Features onLectureSelect={setSelectedLecture} />
                </Dashboard>
                <ScrollToTop />
              </>
            ) : (
              <div>
                <Navbar />
                <Hero />
                {/* <About /> */}
                <Features onLectureSelect={setSelectedLecture} />
                <HowItWorks />
                <Footer />
                <ScrollToTop />
              </div>
            )
          }
        />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
