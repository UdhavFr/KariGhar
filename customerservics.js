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

var SuggestionDB = firebase.database().ref('Suggestions');

document.getElementById("suggestform").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var suggvalue = getElementVal("sugg");

    saveMessages(suggvalue);

    document.getElementById('suggestform').reset();
}

const saveMessages = (suggvalue) => {
    var newsuggestion = SuggestionDB.push();

    newsuggestion.set({
        Suggestion : suggvalue,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.footer-col, .suggest, .suggform, .button').forEach((el) => observer.observe(el));
