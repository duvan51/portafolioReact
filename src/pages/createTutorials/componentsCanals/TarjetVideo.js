import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {getTutorialsId} from '../../../services/api';
import './tarjetVideo.css';

import CreatVideoTarjet from '../../tutorialbyid/CreateVideoTarjet'

import imgAdd from "../../../publics/add.svg"


const TarjetVideo = ({dataCourses, coursesInfo}) => {
  
    const [videos, setVideos] = useState([]);
    const [modalTrigger, setModalTrigger] = useState(false);

   //-- aqui vamos a traer los videos tutoriales
    useEffect(() => {
            getTutorialsId ()
            .then((res) => {
                setVideos(res);
            })
            .catch((error) => {
              console.error('Error al obtener el tutorial:', error);
              setVideos([]);
            });
      }, []);
    
    const VideoSelect = videos.filter(e => dataCourses.includes(e.id))

    const ObtenerIdDeLink=(link)=>{
        const idOfLink = link.substring(32)
        return idOfLink;
      }

      const OpenModalCreate = () => {
        setModalTrigger(!modalTrigger);
      }

     
    return (
    <div className='tarjetVideo'>
        {VideoSelect.map((x)=>(
            <div key={x.id}>
                <Card style={{ width: '15rem' }}>
                    <Card.Img 
                        variant="top" 
                        src={`https://img.youtube.com/vi/${ObtenerIdDeLink(x.link)}/mqdefault.jpg`}
                        alt={`Thumbnail for video ${ObtenerIdDeLink(x.link)}`}
                    />
                    <Card.Body>
                        <Card.Title>{x.name}</Card.Title>
                    <Card.Text>
                      asdasd
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Text>
                      {x.created}
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
        ))
        }
        <div className='Add'>
            <Card style={{ width: '15rem' }}> 
                <Card.Body>
                    <Card.Img variant="top" src={imgAdd} />
                    <Button variant="primary" onClick={OpenModalCreate}>add tutorial</Button>
                    <CreatVideoTarjet data={coursesInfo} triggerOpenModal={modalTrigger} />
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default TarjetVideo