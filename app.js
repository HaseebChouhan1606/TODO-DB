
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";


// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyDj6rtA8wcr53PP4H2tGaL9b363y2UJMx0",
  authDomain: "todo-app-db-ed29f.firebaseapp.com",
  databaseURL: "https://todo-app-db-ed29f-default-rtdb.firebaseio.com",
  projectId: "todo-app-db-ed29f",
  storageBucket: "todo-app-db-ed29f.appspot.com",
  messagingSenderId: "873326973115",
  appId: "1:873326973115:web:357657311d0854540b199e"
});
const database = getDatabase();


var task = document.getElementById('tasks')
var sikan = document.getElementById('sikadar');
window.sendData = function () {
  var obj = {
    task: task.value,
    date: JSON.stringify(new Date()),
  };

  const datakey = ref(database, 'data/');
  obj.id = push(datakey).key;
  console.log(obj.id);
  console.log(obj);

  const datadb = ref(database, `data/${obj.id}/`);
  set(datadb, obj);
}

window.getData = function () {
  const keyrefere = ref(database, 'data/');
  onChildAdded(keyrefere, function (data) {
    sikan.innerHTML += `<li>${data.val()}</li>`
    console.log(data.val());
  });
}


