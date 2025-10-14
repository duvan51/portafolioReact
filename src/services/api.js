
import PocketBase from 'pocketbase'



const URL = "https://api.desarrollandoando.fun/"



const pb = new PocketBase(`${URL}`)
export default pb;



export const getTutorials = async ()=>{


    try{
        const pb = new PocketBase(`${URL}`)
        const records = await pb.collection('courses').getFullList({
            sort: '-created',
        });
        return records
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
}





export const getTutorialsId = async ()=>{


    try{
        const pb = new PocketBase(`${URL}`)
        const records = await pb.collection('tutorials').getFullList('',{
            sort: '-created',
        });
        
        return records
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
}





export const getbyTutorialId = async (id)=>{

    try{
        const pb = new PocketBase(`${URL}`)
        const record = await pb.collection('courses').getOne(id,{
            expand: 'relField1,relField2.subRelField',
        });
        return record;
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
}





export const getbyCanalId = async (id)=>{

    
    try{
        const pb = new PocketBase(`${URL}`)
        const record = await pb.collection('canals').getOne(id,{
            expand: 'relField1,relField2.subRelField',
        });
        return record;
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
}






export const createCanals = async (data)=>{
    
    try {
        const pb = new PocketBase(`${URL}`);
        const record = await pb.collection('canals').create(data);

        return record // Devuelve el nuevo canal creado con el código de estado 201 (creado)
    } catch (err) {
        console.error("Error al crear el canal: ", err);
        throw err
    }
}







export const addVideo = async (data)=>{

    console.log(data)
    
    try{
        const pb = new PocketBase(`${URL}`);
        const record = await pb.collection("tutorials").create(data);

        return record
    }catch(err){
        console.log("error al crear el video", err)        
        throw err
    }
}