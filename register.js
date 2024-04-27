const firebaseConfig = {
    apiKey: "AIzaSyAYB5KtKEQfOoj9twNdgLprB1uzN7RfPIY",
    authDomain: "karighar-a541c.firebaseapp.com",
    databaseURL: "https://karighar-a541c-default-rtdb.firebaseio.com",
    projectId: "karighar-a541c",
    storageBucket: "karighar-a541c.appspot.com",
    messagingSenderId: "760378232536",
    appId: "1:760378232536:web:65d32ad7df119213f4d1ad",
    measurementId: "G-RRSDHB7PGL"
};

firebase.initializeApp(firebaseConfig);

var RegisterformDB = firebase.database().ref('Registration');

document.getElementById("register").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var aadhar = getElementVal("aadhar");
    var pass = getElementVal("pass");

    saveMessages(fname, lname, email, phone, aadhar, pass);

    document.querySelector(".alert").style.opacity = 1;

    setTimeout(() => {
        document.querySelector(".alert").style.opacity = 0;
    }, 2000);

    document.getElementById('register').reset();
}

const saveMessages = (fname, lname, email, phone, aadhar, pass) => {
    var newregister = RegisterformDB.push();

    newregister.set({
        first_name : fname,
        last_name : lname,
        email : email,
        phone_no : phone,
        aadhar_no : aadhar,
        password : pass,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.regform, .footer-col').forEach((el) => observer.observe(el));

function F1(ele, val) {
    document.getElementById(ele).value = val;
}