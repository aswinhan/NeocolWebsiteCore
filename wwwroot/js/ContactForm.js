﻿
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        alertify.alert('Your message has been sent. Thank you!');
        form.reset()
    }).catch(error => {
        alertify.alert('Oops! There was a problem submitting your form');
    });
}
form.addEventListener("submit", handleSubmit)