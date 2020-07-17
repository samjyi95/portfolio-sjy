function openTab(evt, section) {
    var i, tabz, tablinks //why do list variables here again?
    tabz = document.getElementsByClassName('tabz');
    for (i = 0; i < tabz.length; i++) {
        tabz[i].style.display = "none";
        console.log('Success')
    }
    tablinks = document.getElementsByClassName('tablinks')
    for (i = 0; i < tabz.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        console.log('Running thru fine')
    }
    document.getElementById(section).style.display = "block";
    evt.currentTarget.className += " active";
    console.log('Ran thru but did it make changes?')
}
document.getElementById("defaultOpen").click();

// //I think i need to put all this in a fetch call?
// handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm(
//         "samjyi95_gmail_com",
//         "hellosam",
//         "contactMe", //contactMe is the className for the form
//         "user_MU2MzoWUYHh8FcAuUgQOh"
//     )
// }

var myform = $("form#myform");
myform.submit(function (event) {
    event.preventDefault();

    // Change to your service ID, or keep using the default service
var service_id = "samjyi95_gmail_com";
var template_id = "hellosam";

myform.find("button").text("Sending...");
emailjs.sendForm(service_id, template_id, myform[0])
    .then(function () {
        alert("Sent!");
        myform.find("button").text("Send");
    }, function (err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
        myform.find("button").text("Send");
    });
return false;
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});