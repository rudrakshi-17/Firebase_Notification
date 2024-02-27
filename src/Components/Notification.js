import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

export async function requestNotificationPermission(vapidKey, backendEndpoint) {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
        try {
            const token = await getToken(messaging, {
                vapidKey: vapidKey,
            });
            console.log("Token :", token);
            
            if (backendEndpoint) {
                const response = await fetch(backendEndpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token: token }),
                });

                if (!response.ok) {
                    throw new Error("Failed to send token to backend");
                }
            }

            return token;
        } catch (error) {
            console.error("Error getting token:", error);
            return null;
        }
    } else if (permission === "denied") {
        alert("Permission Denied");
        return null;
    }
}
