import PocketBase from 'pocketbase'



const URL = "http://127.0.0.1:10000"



export const lenguajesProyects = async ()=>{


    try{
        const pb = new PocketBase(`${URL}`)
        const records = await pb.collection('lenguajesProyects').getFullList({
            sort: '-created',
        });
        return records
    }
    catch (err){
        console.error("error al obtener lenguajes de proyectos : ", err)
        throw err;
    }
}
