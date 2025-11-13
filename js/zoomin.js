function zoomin(imageid){
    var modal = document.getElementById("zoomin");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(imageid);
    var modalImg = document.getElementById("img");
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    }

    // When the user clicks on <span> (x), close the modal
    modal.onclick = function() {
    modal.style.display = "none";
    }
}