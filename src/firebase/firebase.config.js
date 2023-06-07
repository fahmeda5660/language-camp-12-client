// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log('environment variable', import.meta.env.VITE_APIKEY);
const firebaseConfig = {
    apiKey:import.meta.env.VITE_APIKEY,
    authDomain:import.meta.env.VITE_AUTHDOMAIN,
    projectId:import.meta.env.VITE_PROJECTID,
    storageBucket:import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
    appId:import.meta.env.VITE_APPID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAQmTTyR-4KMp_dYNDIxXBU08vjcRagyak",
//   authDomain: "bistro-boss-dd6d8.firebaseapp.com",
//   projectId: "bistro-boss-dd6d8",
//   storageBucket: "bistro-boss-dd6d8.appspot.com",
//   messagingSenderId: "1096784076206",
//   appId: "1:1096784076206:web:b549063079ba9c6e433c3f"
// };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);