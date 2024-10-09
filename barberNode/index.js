import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCFRb6MeG4aesTba4Chge7l37TjGPBCDVI",
  authDomain: "barbearia-3cc36.firebaseapp.com",
  projectId: "barbearia-3cc36",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

const useCollection = collection(db, 'cadastroBarbeiro');

const get = async () => {
  try {
    const dados = await getDocs(useCollection);
    dados.forEach(doc => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Erro ao buscar dados: ", error);
  }
};

// Chame a função get() para executar
get();

