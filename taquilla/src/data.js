// import * as firebase from 'firebase/app';
import data from 'firebase';

var config = {
    apiKey: "AIzaSyAAWz8CBuEhy_O8CtPHcHXTKr7boFT6H_8",
    authDomain: "geek-skull.firebaseapp.com",
    databaseURL: "https://geek-skull.firebaseio.com",
    projectId: "geek-skull",
    storageBucket: "geek-skull.appspot.com",
    messagingSenderId: "1068712673443"
};

data.initializeApp(config);
export default data;