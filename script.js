window.addEventListener("load", myFunction);
window.addEventListener("resize", myFunction);

function myFunction() {
if(window.innerWidth<850){
    document.getElementById("cal_iframe").src = 	"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&mode=AGENDA&src=Zmg3NzVxMWs2cmo4dHM1dmtpZDRzajJqNGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23795548";
}
else{
    document.getElementById("cal_iframe").src = 
    "https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=1&src=Zmg3NzVxMWs2cmo4dHM1dmtpZDRzajJqNGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23795548";

    }
}
