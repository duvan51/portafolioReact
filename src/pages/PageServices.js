import Nav from "../components/nav/Nav.js";
import MainOne from "../components/body/MainOne.js";
import MainServices from "../components/body/MainServices";
import { AboutMe } from "../components/aboutMe/AboutMe";
import { Portafolio } from "../components/Portafolio/Portafolio";
import ContactForm from "../components/contact/contact";
import ContactMe from "../components/contact/ContactMe";
import HabilitiesBlands from "../components/habilityesBlands/habilitiesBlands";
import Footer from "../components/footer/Footer";

import "./PageServices.css";

import { useTheme } from "styled-components";


const Body = () => {
  const theme = useTheme();

  return (
    <div className="w-100" 
    style={{
        backgroundColor: theme.backgroundPrimary,
        color: theme.colorPrimary,
      }}
    >
      
      <div className="">
        
            <MainOne />
         
            <MainServices />
        
            <AboutMe />
        
            <Portafolio />
          
            <ContactMe />
     
            <ContactForm />
          <HabilitiesBlands />
     
      </div>
      <Footer />
    </div>
  );
};

export default Body;
