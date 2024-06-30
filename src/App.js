import React from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbm77ycpu3WSjK26ZSyyqxBASNLseNtfk",
  authDomain: "rojkharido-web-analytics.firebaseapp.com",
  projectId: "rojkharido-web-analytics",
  storageBucket: "rojkharido-web-analytics.appspot.com",
  messagingSenderId: "835260043304",
  appId: "1:835260043304:web:c93cd0b632abf7c303651d",
  measurementId: "G-76DDWW9JMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {


  const btnFunc1 = async()=>{
    console.log("Helooo1");
    logEvent(analytics,"btn1 Clicked");
  }

  const btnFunc2 = async()=>{
    console.log("Helooo2");
    logEvent(analytics,"btn2 Clicked");
  }

  const btnFunc3 = async()=>{
    console.log("Helooo3");
    logEvent(analytics,"btn3 Clicked");
  }

  return (
   
    
    <>
    
    <h1 onClick={()=>btnFunc1()}>Click Button1</h1>
    <h1 onClick={()=>btnFunc2()}>Click Button2</h1>
    <h1 onClick={()=>btnFunc3()}>Click Button3</h1>
    
    </>

  )
}

export default App