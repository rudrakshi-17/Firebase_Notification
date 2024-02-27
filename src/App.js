import "./App.css";
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
function App() {
	//normal implementation
	async function requestPermission() {
		const permission = await Notification.requestPermission();
		if (permission === "granted") {
			const token = await getToken(messaging, {
				vapidKey:
					"BLzpxixYgVb-LxteOqgmQUS3Iali2_JfFwxiXi85nPRroZe393nrZCZTQqluLypr0eLEtij1t-qnqnbtBEbMV0o",
			});
			console.log("Token :", token);
		} else if (permission === "denied") {
			alert("Permission Denied");
		}
	}
	useEffect(() => {
		requestPermission();
	});

	return (
		<div className='App'>
			<header className='App-header'>{/* <Notification /> */}</header>
		</div>
	);
}
export default App;
