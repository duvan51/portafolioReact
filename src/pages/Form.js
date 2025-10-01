import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./form.css"


const Form =()=> {
  const { register, handleSubmit } = useForm();
  
  
  
  const [data, setData] = useState({});
  const navigate = useNavigate();
  

  const onSubmit =(data)=>{
    setData(data)
  }
  useEffect(()=>{
    if(data.firstName){
    localStorage.setItem("user", data.firstName);
    navigate('/services')
    }

  },[data, navigate])




  return (
    
    <div className="App-a">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="Name recrut,company or visitor" />
        <div>
          <select {...register("category")}>
            <option value="C">Visitant</option>
            <option value="A">Company</option>
            <option value="B">Recrutier</option>
          </select>
        <input type="submit" value="ingresar" className="login" />
      </div>     
      </form>
    </div>
  );
}
export default Form;