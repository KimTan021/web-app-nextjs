import {FirebaseApp, getApp, getApps, initializeApp} from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC5adokL4qxiV1FwIjizwebA8izju7g_kA",
    authDomain: "firstproj-firebase-mfa.firebaseapp.com",
    projectId: "firstproj-firebase-mfa",
    storageBucket: "firstproj-firebase-mfa.appspot.com",
    messagingSenderId: "1044069739510",
    appId: "1:1044069739510:web:28c5ef841db9d018eeb5d7"
};

let app: FirebaseApp;

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

export { app }