const form = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');


form.addEventListener('submit', function(event) {

    event.preventDefault();
    alert('Form submitted!');
});
