function upDate(previewPic) {

    console.log("upDate function triggered");

    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";

    document.getElementById("image").innerHTML =
        previewPic.alt;
}


function unDo() {

    document.getElementById("image").style.backgroundImage =
        "url('')";

    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}
