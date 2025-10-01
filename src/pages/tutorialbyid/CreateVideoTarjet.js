import { useState, useEffect } from 'react';

import React from 'react'
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'

import Button from 'react-bootstrap/Button';
import { addVideo } from '../../services/api';



const CreateVideoTarjet = ({data, triggerOpenModal}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    // Abre el modal cuando triggerOpenModal cambia
    if (triggerOpenModal) {
      setIsModalOpen(true);
    }
  }, [triggerOpenModal]);

    useEffect(()=>{
      if(isModalOpen){
       AddCardVideoTarjet(); 
      }
    },[isModalOpen])

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

   
    const AddCardVideoTarjet = () =>{
      Swal.fire({
        title: `Agregar video a curso ${data.name}`,
        html: `
        <div>${data.id}</div>
        <input type="text" id="username" class="swal2-input" placeholder="Nombre de Video">
        <input type="text" id="descripcion" class="swal2-input" placeholder="Descripcion">
        <input type="text" id="link" class="swal2-input" placeholder="link">
      `,
        showCancelButton: true,
        confirmButtonText: "Enviar",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          const collectionId = data.id;
          const name = Swal.getPopup().querySelector('#username').value;
          const description = Swal.getPopup().querySelector('#descripcion').value;
          const link = Swal.getPopup().querySelector('#link').value;
          if (!name || !description || !link) {
            Swal.showValidationMessage('Please enter all fields');
            return;
          }
          return { collectionId, name, description, link };
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then(async(result) => {
        if (result.isConfirmed) {
          const{ collectionId, name, description, link } = result.value
          
          try{

            const response = await addVideo({ collectionId, name, description, link })

            
            Swal.fire({
              title: `Informaciond de Video`,
              html: `
              <p>ID: ${collectionId}</p>
              <p>Username: ${name}</p>
              <p>Descripcion: ${description}</p>
              <p>link: ${link}</p>
              `,
            }).then(()=>{
              handleCloseModal();
            });
            
          }catch (error){
            Swal.fire('Error', 'No se pudo enviar la información', 'error');
          }
        } else if (result.dismiss === Swal.DismissReason.cancel){
          handleCloseModal();
        }
      });
}

  return (
    <div>
      
    </div>
  )
}

export default CreateVideoTarjet