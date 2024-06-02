import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBihZw4vtN1rpdEKPzD-3MlyA3ZKq3-yL8",
  authDomain: "key2homes.firebaseapp.com",
  projectId: "key2homes",
  storageBucket: "key2homes.appspot.com",
  messagingSenderId: "741015841284",
  appId: "1:741015841284:web:aaeb2c9b88fde6845b2351",
  measurementId: "G-WVVT4Q8D9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the initialized Firebase app and analytics instance
export { app, analytics };
