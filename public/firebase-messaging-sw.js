importScripts(
	"https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
	"https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

//the Firebase config object
const firebaseConfig = {
	apiKey: "AIzaSyA2FwzalxjzkDEEO_6UnpdFYzdLhWNKmO0",
	authDomain: "notification-c3d55.firebaseapp.com",
	projectId: "notification-c3d55",
	storageBucket: "notification-c3d55.appspot.com",
	messagingSenderId: "47349730708",
	appId: "1:47349730708:web:307e54a54bb76c7e4ed381"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	// console.log("Received background message ", payload);
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: payload.notification.image,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
