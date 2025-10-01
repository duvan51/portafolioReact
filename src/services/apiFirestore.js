import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // o ajusta según tu estructura




export const obtenerPosts = async () => {
  const snapshot = await getDocs(collection(db, "postsProyects"));
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
};



// Crear un nuevo post
export const crearPost = async (postData) => {
  const docRef = await addDoc(collection(db, "postsProyects"), postData);
  return docRef.id;
};




export const getLenguajes = async () => {
    try {
    const snapshot = await getDocs(collection(db, "lenguajesProyects"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Error al obtener lenguajes:", error);
    throw error;
  }
}

export const getCategorias = async () => {
    try {
    const snapshot = await getDocs(collection(db, "categoriasProyects"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Error al obtener lenguajes:", error);
    throw error;
  }
}