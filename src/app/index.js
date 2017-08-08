import * as firebase from "firebase";
import config from "./FIREBASE_CONFIG";

firebase.initializeApp(config);

const button = document.querySelector("#set");

button.onclick = () => {
	// permission_denied https://stackoverflow.com/questions/37403747/firebase-permission-denied
	firebase.database().ref("test/1")
		.set({
			username: "test_name",
			email: "test_name@email.com",
			profile_picture: "test_picture.jpg",
		});
};