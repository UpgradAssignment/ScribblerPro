
var postModal = document.getElementById("postModal");

var close2 = document.getElementById("close3");

function addPost(){
    postModal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == postModal) {
        postModal.style.display = "none";
    }
};

close2.onclick = function() {
    postModal.style.display = "none";
}
