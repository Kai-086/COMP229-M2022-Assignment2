"use strict";
(function () {
    function Start() {
        console.log("App Started!");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "../data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON Data:");
                console.log("===========");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);

    // for contact page Email uses
    function Sent() {
        let emailBtn = document.getElementById('email_btn');

        /*
            @https://stackoverflow.com/questions/7381150/how-to-send-an-email-from-javascript 
        */

        emailBtn.addEventListener("click", function () {
            // get value
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let subject = document.getElementById('subject').value;

            let content = "" + document.getElementById('content').value + '%0A%0A';
            content += "From:" + name.value + '%0A';
            content += "Email:" + email.value + '%0A';


            mailTo.href = "mailto:" + "?subject" + "&body=" + content;
            mailTo.click();
        });
    }
    window.addEventListener("load", Sent);
});
//# sourceMappingURL=app.js.map