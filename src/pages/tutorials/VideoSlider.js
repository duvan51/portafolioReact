import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import VentanaVideo from "./VentanaVideo.js"


/* import de iconos */
import { IconName } from "react-icons/cg";
import { CgAddR } from "react-icons/cg";



import './tutorials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { getTutorials, getTutorialsId } from '../../services/api.js';


const VideoSlider = () => {
  const [tutorials, setTutorials] = useState([]) 

      useEffect(()=> {
        // Llama a la función de servicio para obtener productos
        getTutorials()
          .then(data => {
            // Maneja los datos obtenidos
            setTutorials(data)
            
          })
          .catch(error => {
            // Maneja los errores
            console.error(error);
          });
      },[])

   


const [tutorialsId, setTutorialsId] = useState([]) 

    useEffect(()=> {
      // Llama a la función de servicio para obtener productos
      getTutorialsId()
        .then(data => {
          // Maneja los datos obtenidos
          setTutorialsId(data)
          console.log(tutorialsId)

        
        })
        .catch(error => {
          // Maneja los errores
          console.error(error);
        });
    },[])
   









  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [VideoSelect, setVideoSelect]=useState({});
 

  const [activeTab, setActiveTab] = useState('');
  

  const renderCursos =()=>{
    return tutorials.map(x => 
      <div key={x.id} onClick={()=> setSelectedCourse(x)}>
        {x.name} 
      </div>
      )
  }
  

  const ObtenerIdDeLink=(link)=>{

    const idOfLink = link.substring(32)
    return idOfLink;
  }
/**aqui manejaremos las pestañas */
    //manejar el cambio de pestañas
  const handleTabSelect = (eventKey) =>{
    setActiveTab(eventKey)
  }
    //verificar si no hay pestañas activas
    if (!activeTab && tutorials.length > 0) {
      setActiveTab(tutorials[0].name); // Establecer la primera pestaña como activa
    }
  


  // UseEffect se ejecuta una vez cuando el componente se monta
  useEffect(() => {
   
    setVideoSelect(tutorials[0])
    
  }, [tutorials, VideoSelect]);

 
 

/**end pestañas */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   
  };

  const onVideoClick = (videoId) => {
    setSelectedVideo(videoId.link.substring(32));
  };
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };



  return (
    <div className='tutorialsVideos'>
      
      <Slider {...settings}>
          {tutorialsId.map((videoId) => (
        
            <div key={videoId.id} onClick={() => onVideoClick(videoId)}>
              <img
                src={`https://img.youtube.com/vi/${ObtenerIdDeLink(videoId.link)}/mqdefault.jpg`}
                alt={`Thumbnail for video ${ObtenerIdDeLink(videoId.link)}`}
              />
            </div>
          ))}
      </Slider>

      <div className='segundaParte'>
        <div className='SelectCourse'>
          <Tabs
            defaultActiveKey={activeTab}
            id="justify-tab-example"
            className="mb-3"
            justify
            onSelect={handleTabSelect}
            >
            {tutorials.map((x) => (
            <Tab to={`/tutorials/${x.id}`} key={x.id} title={x.name} eventKey={x.name}>
              <div className='cuadriculavideosTab'>
                {x.tutorials_id.map((tutorialId) => {
                  // Buscar el tutorial correspondiente en tu lista de datos
                  const tutorial = tutorialsId.find(tutorial => tutorial.id === tutorialId);
                  
                  // Verificar si se encontró el tutorial
                  if (tutorial) {
                    
                    return (
                      <>
                      <div className='kjk' key={tutorial.id} onClick={() => onVideoClick(console.log("llendo course"))}>
                        <img
                          src={`https://img.youtube.com/vi/${ObtenerIdDeLink(tutorial.link)}/mqdefault.jpg`}
                          alt={`Thumbnail for video ${ObtenerIdDeLink(tutorial.link)}`}
                          className='tutorialImages'            
                      />
                      </div>
                      </>
                    );
                  } else {
                    // Manejar el caso donde no se encontró el tutorial
                    return <div key={tutorialId}>Tutorial no encontrado</div>;
                  }
                })}
              </div>
              <div className='irA'>
                <Link to={`/tutorials/${x.id}`} onClick={() => console.log("esto es ",x)}>
                  <div>Ir a curso</div><CgAddR />
                </Link>
              </div>
            </Tab>
            ))}
          </Tabs>
        </div> 
      
        {selectedVideo && (
            <div className='VideoYoutube'>
              <YouTube videoId={selectedVideo} opts={opts} />
            </div>
          )}
      </div>
        
        <div className='cuadriculavideos'>
        {tutorialsId.map((videoId) => (
            <div key={videoId.id} onClick={() => onVideoClick(videoId)}>
              <img
                src={`https://img.youtube.com/vi/${ObtenerIdDeLink(videoId.link)}/mqdefault.jpg`}
                alt={`Thumbnail for video ${ObtenerIdDeLink(videoId.link)}`}
              />
            </div>
        ))}
        </div>
      



      <VentanaVideo videoSelect={VideoSelect} /> 
      
    </div>


  );
};

export default VideoSlider;

