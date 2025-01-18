import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    databaseURL: import.meta.env.VITE_FIREBASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJ_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
