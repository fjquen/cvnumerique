class mail {

    constructor() {
        this.initSendMail();
        this.sendMail();
    }
    

    initSendMail(){
        (function() {
            // https://dashboard.emailjs.com/admin/integration
            emailjs.init('user_cPiuF8hndGkJlEKHKdpa5');
        })();
    }
    sendMail(){

        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('service_m9f3fut', 'template_nt7isjv', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }
    }
}