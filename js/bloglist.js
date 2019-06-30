function blogFunction() {
    var descCollection = document.getElementsByClassName("post-desc");
    for (var i=0; i<document.getElementsByClassName("post-desc").length; i++){
        var val = document.getElementsByClassName("post-desc")[i].innerHTML.substring(0,250);
        descCollection[i].innerHTML = val;
    }
}
var count = 0;
function pop() {
    if(count == 0){
        document.getElementById("box").style.visibility ="visible";
        count=1;
    }else{
        document.getElementById("box").style.visibility ="hidden";
        count=0;
    }
}

