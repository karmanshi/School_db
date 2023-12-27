
import './App.css';
import SchoolRegistrationForm from './Components/addSchool';
import ShowSchool from './Components/showSchool'; // Import the component to save data
import Layout from './Components/Layout'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="" element={<SchoolRegistrationForm />} />
        <Route path="show-school" element={<ShowSchool />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
