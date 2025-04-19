import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from "./components/Loginpage.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './components/SignupPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import WeightGain from './components/WeightGain.jsx';
import WeightLoss from './components/WeightLoss.jsx';
import BuildMus from './components/BuildMus.jsx';
// import ExercisePlan from './components/ExercisePlan.jsx';
// import Checklist from './components/Checklist.jsx';
// import WaterTracker from './components/WaterTracker.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/WeightGain" element={<WeightGain />} />
        <Route path="/WeightLoss" element={<WeightLoss />} />
        <Route path="/BuildMus" element={<BuildMus />} />
        {/* <Route path="/plan" element={<ExercisePlan />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/water" element={<WaterTracker />} /> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App
