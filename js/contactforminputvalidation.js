//Created by Roisin Kelly
let contactFormEvent = document.getElementById("contactForm");
contactFormEvent.addEventListener("submit", function(event) {
  event.preventDefault();
 
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let feedbackError = document.getElementById("feedbackModalBodyError");
  let headerError = document.getElementById("headerError");
  let errorModal = document.getElementById("errorModal");
  let successModal = document.getElementById("successModal");
  if (name === "" ) {
	  headerError.innerHTML = "Invalid name!";
	  feedbackError.innerHTML="Please enter name!";
	  successModal.classList.add("inVisibleDisplay");
    return;
  }
  else if(isNaN(phone) || phone === ""){
	headerError.innerHTML = "Invalid phone number!";
    feedbackError.innerHTML="Please enter valid phone number!";
	successModal.classList.add("inVisibleDisplay");
	return;
  }
  else if (email === "") {
	headerError.innerHTML = "Invalid email!";
    feedbackError.innerHTML="Please enter valid email!";
	successModal.classList.add("inVisibleDisplay");
    return;
  }
  else{
	  let feedbackSuccess = document.getElementById("feedbackModalBodySSuccess");
	  feedbackSuccess.innerHTML= "Hi "+name+", thank you for your details. We will be in touch via "+phone+" shortly."
	  let formTitle = document.getElementById("title");
	 formTitle.innerHTML = "Thank You";
	  errorModal.classList.add("inVisibleDisplay");
	  contactForm.classList.add("inVisibleDisplay");
	  contactMessage.innerHTML = "";
	  successModal.classList.remove("inVisibleDisplay");
	  return;
  }
  
});

