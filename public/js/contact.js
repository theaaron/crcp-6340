(() => {
    "use strict";

    const form = document.querySelector('#contact-form');
    let contactFormBtn = document.querySelector('#contactFormBtn');

    contactFormBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        let isFormValid = true;
        
        if (!form.checkValidity()) {
            isFormValid = false;
        } 
        form.classList.add('was-validated');
        if (isFormValid) {
            sendEmail();
        }
        
    });
    
    function sendEmail() {
        let name = document.querySelector('#name').value;
        let mail = document.querySelector('#mail').value;
        let msg = document.querySelector('#msg').value;

        let obj = {
            sub: "Someone submitted a contact form",
            txt: `${name} sent you a message: ${msg}. Please respond at ${mail}`,
        }
        
        fetch("/mail", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(obj),
        })
        .then((r) => r.json())
        .then((response) => {
            document.querySelector("#contactFormBtn").innerHTML = response.result;
        })
        .then(() => {
            setTimeout(() => {
                document.querySelector("#contactFormBtn").innerHTML = "oopsie";
            }, "5000")
        })

    }




})();
