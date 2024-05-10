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
        console.log(`name: ${name}`);
        console.log(`email: ${mail}`);
        console.log(`msg: ${msg}`);
    }




})();
