import './App.css';


/** */

import PageServices from './pages/PageServices.js';
import Tutorials from './pages/tutorials/Tutorials.js'
import TutorialsId from './pages/tutorialbyid/TutorialbyId.js';
import CreateCanal from './pages/createTutorials/CreateCanal.js';
import ProfileCanal from './pages/createTutorials/Canals/PerfilCanal/profilecanal.js';
import Form from './pages/Form';
import AdminHome from './pages/admin/adminHome.jsx';
import Login from './pages/login/Login.jsx';
/** */
import ProtectedRoute from "./components/protectedRoute/protectRoute.jsx";

import Cv from "./pdf/PdfBody.js"





import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/header.jsx";




function App({ setCurrentTheme }) {
  
  return (
    <div className="App" > 
      <Header setCurrentTheme={setCurrentTheme} />
      <Routes>  
        {/* routes publics */}
        {/*<Route path="/pdf" element={<Pdf />}/>*/ }

        <Route path="/" element={<PageServices />} />
        <Route  path="/tutorials" element={<Tutorials/>}/>
        <Route  path="/tutorials/:id" element={<TutorialsId/>}/>
        <Route  path="/createcanal" element={<CreateCanal/>}/> 
        <Route  path="/channel/:id" element={<ProfileCanal/>}/>    
{/**
        <Route  path="/addProject" element={<AddProyects />}/> 
 */}
        <Route  path="/cvpdf" element={<Cv />}/>     
        <Route path="/" element={<Form />} />



        <Route  path="/login" element={<Login />}/>   

        {/* 🔐 Ruta protegida */}
        <Route
          path="/adminHome"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;



