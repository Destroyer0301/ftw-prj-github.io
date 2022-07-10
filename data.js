const firebaseConfig = {
    apiKey: "AIzaSyDOa7bwoKwuiXa97c_-iWYBszLCZgeFpuY",
    authDomain: "ftw007-da005.firebaseapp.com",
    databaseURL: "https://ftw007-da005-default-rtdb.firebaseio.com",
    projectId: "ftw007-da005",
    storageBucket: "ftw007-da005.appspot.com",
    messagingSenderId: "428199165089",
    appId: "1:428199165089:web:9faf959a4262ddd3d844e0",
    measurementId: "G-3VV5DRE28T"
  };
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};