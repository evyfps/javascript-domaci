var i = 0;
function changeBackground() {
  var doc = document.getElementById("backgroundColor");
  var color = ["cyan", "pink"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(changeBackground, 1000);

function openAlert() {
    alert('Welcome !');
}

var originalText = "Hi !";
var isStylingApplied = false;

function toggleStyling() {
    var paragraph = document.getElementById("paragraph");

    if (isStylingApplied) {
        paragraph.innerHTML = originalText;
        paragraph.style.fontSize = "";
        paragraph.style.backgroundColor = "";
    } else {
        paragraph.innerHTML = "Text has changed!";
        paragraph.style.fontSize = "30px";
        paragraph.style.backgroundColor = "white";
    }

    // Toggle the state
    isStylingApplied = !isStylingApplied;
}

    var image1 = "img/hello.jpg";
    var image2 = "img/do.jpg";
    var currentImage = image1;

    function changeImage() {
        var image = document.getElementById("img");

        if (currentImage === image1) {
            image.src = image2;
            currentImage = image2;
        } else {
            image.src = image1;
            currentImage = image1;
        }
    }

function provera() {
    var r1 = document.getElementById("male-checkbox");
    var r2 = document.getElementById("female-checkbox");
    var poruka = document.getElementById("span");
    if (r1.checked) {
        poruka.innerHTML = "Selected gender: Male";
    }
    else if (r2.checked) {
        poruka.innerHTML = "Selected gender: Female";
    }
    else {
        alert ("You MUST choose a gender !");
    }
}

function previousPage() {
    window.history.back()
}

function showInput() {
    var label1 = document.getElementById("floatingInput1");
    var label2 = document.getElementById("floatingInput2");
    var label3 = document.getElementById("floatingInput3");

    label1.textContent = "Pera"
    label2.textContent = "Peric"
    label3.textContent = "Dog"
}

function showList() {
    var list = document.getElementById("list");
    list.innerHTML = "";

    createListItem("Pera");
    createListItem("Peric");
    createListItem("Dog");
}

function createListItem(content) {
    var listItem = document.createElement("li");
    listItem.textContent = content;

    listItem.style.listStyle = "none";
    listItem.style.fontSize = "20px";

    document.getElementById("list").appendChild(listItem);
}