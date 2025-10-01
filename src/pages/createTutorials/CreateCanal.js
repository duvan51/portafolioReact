import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";

import {createCanals} from '../../services/api'


const CreateCanal = () => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    courses_id: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createCanals(formData);
      console.log('Solicitud POST enviada con éxito:', response);
      // Aquí podrías manejar la respuesta de la API, como redirigir a otra página, mostrar un mensaje de éxito, etc.
    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      // Aquí podrías manejar el error, como mostrar un mensaje de error al usuario
    }
  };

  
   
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>CreateCanal</div>
        <label>
          Nombre de Canal:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </label>

        <br />
        <label>
          Email del canal:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        <br />

        <label>
          curse id:
          <input
            type="text"
            name="courses_id"
            value={formData.courses_id}
            onChange={handleInputChange}
          />
        </label>

        <input type="submit" />
    </form>
        
    </div>
  )
}

export default CreateCanal