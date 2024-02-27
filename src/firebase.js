import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA2FwzalxjzkDEEO_6UnpdFYzdLhWNKmO0",
	authDomain: "notification-c3d55.firebaseapp.com",
	projectId: "notification-c3d55",
	storageBucket: "notification-c3d55.appspot.com",
	messagingSenderId: "47349730708",
	appId: "1:47349730708:web:307e54a54bb76c7e4ed381"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);
