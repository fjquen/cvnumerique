class mail {

    constructor() {
        this.initSendMail();
        this.sendMail();
    }
    

    initSendMail(){
        (function() {
            // https://dashboard.emailjs.com/admin/integration
            emailjs.init('8CBzMZT7X-jTENC8o');
        })();
    }
    sendMail(){

        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_s1jxe05', 'template_mw7ikfe', this)
                    .then(function() {
                        alert("Message envoyé");
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }
    }
}
