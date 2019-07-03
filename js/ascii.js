var textArea = document.getElementById("input_text");

function play() {
  var text = textArea.value;

  var newText = text.split(" ");
  newText.forEach(function(element, index, array) {
    setInterval(display, 2000, element);
  });
}

function display(element) {
  document.getElementById("input_text").value = element;
}

function show(size) {
  document.getElementById("input_text").style.fontSize = size;
}

var size = "15px";

function changeFont() {
  //   var size = document.getElementById("size").value;
  console.log("clicked");
  size = parseInt(size) + 3 + "px";
  setInterval(show, 500, size);

  //   var x = 10;

  //   function main() {
  //     var x;

  //     console.log("x1: " + x);

  //     if (x > 0) {
  //       var x = 30;

  //       console.log("x2: " + x);
  //     }

  //     x = 40;

  //     var f = function(x) {
  //       console.log("x3: " + x);
  //     };

  //     f(50);
  //   }

  //   main();
}
