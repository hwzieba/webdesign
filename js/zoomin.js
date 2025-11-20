function zoomin(imageid) {
  //Finding elements on page
  var modal = document.getElementById("zoomin");
  var img = document.getElementById(imageid);
  var modalImg = document.getElementById("img");

  //Displaying the modal
  modal.style.display = "block";
  modal.style.padding = "10px";
  modalImg.src = img.src;

  //Closing the modal
  modal.onclick = function() {
    modal.style.display = "none";
  }
}