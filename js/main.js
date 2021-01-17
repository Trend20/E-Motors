//Get the button:
let myButton = document.getElementById("myButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// email submission

const emailInput = document.getElementById('email');
const form = document.getElementById('form');
const submitButton = document.getElementById('btn');


submitButton.addEventListener('click', sendEmail);

function sendEmail(e) {
    e.preventDefault();

    if (true) {
        const alertMessage = alert('Please enter an email address');
        emailInput.appendChild(alertMessage);
    } else {
        alert('Message sent successfully.')
    }
}