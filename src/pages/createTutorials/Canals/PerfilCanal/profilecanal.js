import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getbyCanalId, getTutorials} from '../../../../services/api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import TarjetVideo from '../../componentsCanals/TarjetVideo';


import './profilecanal.css';


const Profilecanal = () => {

const { id } = useParams();
const [canals, setCanals] = useState({});
const [courses, setCourses] = useState([]);



//voy a traer los cursos que pertenecen a cada canal


// ----- aqui vamos a traer los canales 
  useEffect(() => {
    if (id) {
        getbyCanalId(id)
        .then((res) => {

        setCanals(res);
        
        })
        .catch((error) => {
          console.error('Error al obtener el tutorial:', error);
          setCanals(null);
        });
    }
  }, [id]);


 //-- aqui vamos a traer los cursos 

  useEffect(() => {
    if (id) {
        getTutorials(id)
        .then((res) => {
            setCourses(res);
        })
        .catch((error) => {
          console.error('Error al obtener el tutorial:', error);
          setCourses([]);
        });
    }
  }, [id]);

   

  
   

 
//  const idCourses = courses.map(c => c.id )
  
  const idCanals = canals.courses_id
  const courseSelect = courses.filter(e => idCanals.includes(e.id))

  
    // Filtrar videos por curso ID
    
    


  return (
    <div className='PageProfileCanal'>
        <h1>
            este es el canal de {canals.nombre}
        </h1>
       <div className='bodyCourses'>
            <div>

            </div>
            <div className='bodyCoursesIndividuals'>
                {courseSelect.map((x)=>(
                    <div className='CoursesCards' key={x.id}>
                        
                        <Card style={{ width: '90%' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title{x.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>


                                <div className='CoursesCardsTutorials'>
                                    <TarjetVideo dataCourses={x.tutorials_id} coursesInfo={x} />
                                </div>
                               
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
                
            </div>
       </div>
    </div>
  )
}

export default Profilecanal