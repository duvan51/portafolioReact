import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import Accordion from 'react-bootstrap/Accordion';
import './tutorialbyid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getbyTutorialId, getTutorialsId } from '../../services/api';

import { useNavigate } from 'react-router-dom'

const TutorialbyId = () => {

  const navigate = useNavigate()


  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [clickedVideos, setClickedVideos] = useState([]);
  const [video, setVideo] = useState({});

 
  const [videoSel,  setVidSel] = useState(null);

  const [FirstVideo, setFirstVideo] = useState(null)
  const [courseTutorialsIDs, setCourseTutorialsIDs] = useState([0]);
  const [tutorialByCourse, setTutorialByCourse] = useState(null);
 

  useEffect(() => {
    if (tutorialByCourse !== null) {
      const objetosComunes = tutorialByCourse.filter(x => courseTutorialsIDs.includes(x.id));
      setFirstVideo(objetosComunes);
      
    } else {
      console.log("El arreglo array2 es nulo.");
    }
  }, [tutorialByCourse, courseTutorialsIDs]);


 
// ----- aqui vamos a traer el curso de la seleccion anterior
  useEffect(() => {
    if (id) {
      getbyTutorialId(id)
        .then((res) => {

          setTutorial(res);
          
          setCourseTutorialsIDs(res.tutorials_id)
        
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al obtener el tutorial:', error);
          setLoading(false);
        });
    }
  }, [id]);
// ----- aqui vamos a traer los tutoriales dependiendo los cursos
 
useEffect(() => {
    if (id) {
      getTutorialsId(id)
        .then((res) => {
          setTutorialByCourse(res);
        })
        .catch((error) => {
          console.error('Error al obtener el tutorial:', error);
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    const storedClickedVideos = localStorage.getItem('clickedVideos');
    if (storedClickedVideos) {
      setClickedVideos(JSON.parse(storedClickedVideos));
    }
  }, []);


   

  const onVideoClick = (videoId, videoData) => {
    setSelectedVideo(videoId);
    setVideo(videoData);

    if (!clickedVideos.includes(videoId)) {
      setClickedVideos((prevClickedVideos) => [...prevClickedVideos, videoId]);
      localStorage.setItem('clickedVideos', JSON.stringify([...clickedVideos, videoId]));
    }
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };


  if (!tutorial) {
    return <div>Curso no encontrado</div>;
  }

  const videosTutorial = tutorial.tutorials_id;

  const linkVideoOne = FirstVideo && FirstVideo.length > 0 ? FirstVideo[0].link.substring(32) : null;
  console.log('este es =>',linkVideoOne)

  const listVideos = FirstVideo ? FirstVideo.map((x) => {
    if (x.link && x.link.length >= 32) {
      const idVideos = x.link.substring(32);
      const isClicked = clickedVideos.includes(idVideos);

      return (
        <div
          className={`videoId ${isClicked ? 'clicked' : ''} ${selectedVideo === idVideos ? 'newClass' : ''}`}
          key={x.id}
          onClick={() => onVideoClick(idVideos, x) & setVidSel(idVideos)}
        >
          <div className='videoIdCard'>
            <img src={`https://img.youtube.com/vi/${idVideos}/mqdefault.jpg`} alt={`Thumbnail for video ${idVideos}`} />
            <div className='videoInfo'>
              <div>{x.name}</div>
              <div>{x.description}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }) : null;





  /** /---------------------return -------------------/ */

const back = () =>{
    navigate(('/tutorials'))

}
/** /---------------------return -------------------/ */

  return (
    <div className='tutorialsVideos'>
      <div className='tutorialsVideosVideo'>

      <div className="return">
                        <button onClick={back}> 
                          <i className="fi fi-rr-angle-double-left"></i>
                        </button>
      </div>


        <div className='tutorialsVideosVideoHeader'>
          <div>{tutorial.name}</div>
          <div>{tutorial.description}</div>
        </div>
        {video ? (
          <div>
            <YouTube videoId={linkVideoOne} opts={opts} />
          </div>
        ) : (
          <div>
            <YouTube videoId={videoSel} opts={opts} />
          </div>
        )}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{video.name}</Accordion.Header>
            <Accordion.Body>{video.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='cuadriculaVideos'>{listVideos}</div>
    </div>
  );
};

export default TutorialbyId;