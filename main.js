const cname = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const message = document.getElementById("message");
const btn = document.getElementById("submit-btn");

btn.addEventListener("click", () => {
  if (
    cname.value.trim() === "" ||
    email.value.trim() === "" 
  ) {
    alert("Please fill the empty fields");
  } else {
    if (cname.value.match(/\d+/g) != null) {
      alert("Enter a valid Name");
    } else {
      if (subject.value.match(/^\d+/g) != null) {
        alert("Please enter a valid Subject");
      } else {
        if (email.value.includes("@") === false) {
          alert("Please enter a valid Email");
        } else {
          if (message.value.match(/^\d+/g) != null) {
            alert("Please enter a Message");
          } else {
            alert("Message Sent");
          }
        }
      }
    }
  }
});
