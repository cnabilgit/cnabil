"use strict";

console.log("script loaded");
var sub = document.getElementById("submit");
sub.addEventListener("click", sendWhatsapp);

function sendWhatsapp(e) {
  if (sub.className == "btn btn-default") {
    e.preventDefault();
    var InputName = document.getElementById("InputName");
    var InputEmail = document.getElementById("InputEmail");
    var InputSubject = document.getElementById("InputSubject");
    var InputMessage = document.getElementById("InputMessage");
    var redirect = document.getElementById("redirect");
    var api = "https://api.whatsapp.com/send?phone=212657063575&text=Hello%20My%20name%20is%20".concat(InputName.value, "%20and%20my%20email%20is%20").concat(InputEmail.value, "%20i%20contact%20you%20in%20subject%20of%20").concat(InputSubject.value, "%20so%20:%20").concat(InputMessage.value);
    window.location.href = api;
  }
}