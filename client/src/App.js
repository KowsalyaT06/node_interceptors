import Sign from "./Component/Signup/Sign";
import Login from "./Component/Login/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Home from "./Component/Home/Home";
import Sidebar from "./Component/sideBar/Sidebar";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path='/pages' element={<Home/>}/>
          <Route path='/side' element={<Sidebar/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
