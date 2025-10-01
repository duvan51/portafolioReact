import './App.css';


/** */

import PageServices from './pages/PageServices.js';
import Tutorials from './pages/tutorials/Tutorials.js'
import TutorialsId from './pages/tutorialbyid/TutorialbyId.js';
import CreateCanal from './pages/createTutorials/CreateCanal.js';
import ProfileCanal from './pages/createTutorials/Canals/PerfilCanal/profilecanal.js';
import Form from './pages/Form';
import AddProyects from './pages/addProyects/addProyects.js';
/** */





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

        <Route  path="/addProject" element={<AddProyects />}/>    
        <Route path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;



