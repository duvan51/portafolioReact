
import PocketBase from 'pocketbase'



const URL = "http://82.25.90.180:10000/"



export const getProyects = async ()=>{


    try{
        const pb = new PocketBase(`${URL}`)
        const records = await pb.collection('postsProyects').getFullList({
            sort: '-created',
        });
        return records
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
}

export const createProyect = async (data)=>{   
    try{
        const pb = new PocketBase(`${URL}`);
        const record = await pb.collection("postsProyects").create(data);
        return record
    }catch(err){
        console.log("error al crear el video", err)        
        throw err
    }
}





export const getCategorias = async ()=>{
    try{
        const pb = new PocketBase(`${URL}`)
        const records = await pb.collection('categoriasProyects').getFullList({
            sort: '-created',
        });
        return records
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
}




export const  getTecnologias = async ()=>{
    try{
        const pb = new PocketBase(`${URL}`)
        const records = await pb.collection('lenguajesProyects').getFullList({
            sort: '-created',
        });
        return records
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }  
}