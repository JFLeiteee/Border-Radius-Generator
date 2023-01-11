function borderGenerator() {
    let square = document.querySelector(".square");
    let topRight = document.querySelector("#top-right").value 
    let bottomRight = document.querySelector("#bottom-right").value 
    let topLeft = document.querySelector("#top-left").value 
    let bottomLeft = document.querySelector("#bottom-left").value 

    topRight = topRight + 'px';
    bottomRight = bottomRight + 'px';
    topLeft = topLeft + 'px';
    bottomLeft = bottomLeft + 'px';

    let clipboardText = 'border-radius: ' + topRight + ' ' + topLeft + ' ' + bottomLeft  + ' ' + bottomRight + ' ';

    document.querySelector("#clipboard").innerHTML = clipboardText;

    square.style.borderRadius = topRight + ' ' + topLeft + ' ' + bottomLeft  + ' ' + bottomRight + ' ';
}