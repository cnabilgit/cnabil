console.log("script loaded");
let sub = document.getElementById("submit");
sub.addEventListener("click", sendWhatsapp);

function sendWhatsapp(e) {
  if (sub.className == "btn btn-default") {
    e.preventDefault();
    let InputName = document.getElementById("InputName");
    let InputEmail = document.getElementById("InputEmail");
    let InputSubject = document.getElementById("InputSubject");
    let InputMessage = document.getElementById("InputMessage");
    document.location.href = `{https://api.whatsapp.com/send?phone=212657063575&text=Hello%20My%20name%20is%20${InputName.value}%20and%20my%20email%20is%20${InputEmail.value}%20i%20contact%20you%20in%20subject%20of%20${InputSubject.value}%20so%20:%20${InputMessage.value}}`;
  }
}
