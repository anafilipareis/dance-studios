import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import DanceStylesPage from "./pages/DanceStylesPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/dance-styles" element={<DanceStylesPage />} />
        <Route exact path="/profile/:userId" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route exact path="/dance-classes/edit/:classId" element={<IsPrivate><EditClassPage /></IsPrivate>} />   
        <Route exact path="/signup" element={<IsAnon><SignupPage /></IsAnon>} /> 
        <Route exact path="/login" element={<IsAnon><LoginPage /></IsAnon>}/>       
      </Routes>
    </div>
  );
}

export default App;