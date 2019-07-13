$(function() {
  var puzzleArea = document.getElementById("puzzlearea");
  gameArea = puzzleArea.getElementsByTagName("div");

  for (var i = 0; i < gameArea.length; i++) {
    gameArea[i].className = "puzzlepiece";

    gameArea[i].style.left = (i % 4) * 100 + "px";
    gameArea[i].style.top = parseInt(i / 4) * 100 + "px";
    gameArea[i].style.backgroundPosition =
      "-" + gameArea[i].style.left + " " + "-" + gameArea[i].style.top;

    gameArea[i].onmouseover = function() {
      if (checkMove(parseInt(this.innerHTML))) {
        this.style.border = "3px solid red";
        this.style.color = "orange";
        this.style.backgroundImage = "url('../images/fifteen_background.jpg')";
      }
    };

    gameArea[i].onmouseout = function() {
      this.style.border = "2px solid black";
      this.style.color = "#000000";
      this.style.textDecoration = "none";
    };

    gameArea[i].onclick = function() {
      if (checkMove(parseInt(this.innerHTML))) {
        swap(this.innerHTML - 1);
        if (finish()) {
          win();
        }

        return;
      }
    };
  }

  var shuffle = document.getElementById("shufflebutton");

  spaceX = "300px";
  spaceY = "300px";

  shuffle.onclick = function() {
    for (var i = 0; i < 300; i++) {
      var rand = parseInt(Math.random() * 100) % 4;
      if (rand == 0) {
        var temp = up(spaceX, spaceY);

        if (temp != -1) {
          swap(temp);
        }
      }

      if (rand == 1) {
        var temp = down(spaceX, spaceY);

        if (temp != -1) {
          swap(temp);
        }
      }

      if (rand == 2) {
        var temp = left(spaceX, spaceY);

        if (temp != -1) {
          swap(temp);
        }
      }

      if (rand == 3) {
        var temp = right(spaceX, spaceY);

        if (temp != -1) {
          swap(temp);
        }
      }
    }
  };

  function checkMove(position) {
    if (left(spaceX, spaceY) == position - 1) {
      return true;
    }

    if (down(spaceX, spaceY) == position - 1) {
      return true;
    }

    if (up(spaceX, spaceY) == position - 1) {
      return true;
    }

    if (right(spaceX, spaceY) == position - 1) {
      return true;
    }
  }

  function Notify() {
    notify--;
    if (notify == 0) {
      var body = document.getElementsByTagName("body");

      body[0].style.backgroundImage = "none";

      alert("Winner! ... Shuffle and Play Again");
      var para = document.getElementsByClassName("explanation");
      para[0].style.visibility = "visible";
      return;
    } else notify % 2;

    {
      var body = document.getElementsByTagName("body");

      body[0].style.backgroundImage = "url('../images/winner.png')";
    }

    timer = setTimeout(Notify, 200);
  }

  function win() {
    var body = document.getElementsByTagName("body");

    body[0].style.backgroundImage = "url('../images/winner.png')";

    notify = 10;
    timer = setTimeout(Notify, 200);

    var para = document.getElementsByClassName("explanation");
    para[0].style.visibility = "hidden";
  }

  function finish() {
    var flag = true;

    for (var i = 0; i < gameArea.length; i++) {
      var top = parseInt(gameArea[i].style.top);

      var left = parseInt(gameArea[i].style.left);

      if (left != (i % 4) * 100 || top != parseInt(i / 4) * 100) {
        flag = false;

        break;
      }
    }

    return flag;
  }

  function left(x, y) {
    var cordX = parseInt(x);

    var cordY = parseInt(y);

    if (cordX > 0) {
      for (var i = 0; i < gameArea.length; i++) {
        if (
          parseInt(gameArea[i].style.left) + 100 == cordX &&
          parseInt(gameArea[i].style.top) == cordY
        ) {
          return i;
        }
      }
    } else {
      return -1;
    }
  }

  function right(x, y) {
    var cordX = parseInt(x);

    var cordY = parseInt(y);

    if (cordX < 300) {
      for (var i = 0; i < gameArea.length; i++) {
        if (
          parseInt(gameArea[i].style.left) - 100 == cordX &&
          parseInt(gameArea[i].style.top) == cordY
        ) {
          return i;
        }
      }
    } else {
      return -1;
    }
  }

  function up(x, y) {
    var cordX = parseInt(x);

    var cordY = parseInt(y);

    if (cordY > 0) {
      for (var i = 0; i < gameArea.length; i++) {
        if (
          parseInt(gameArea[i].style.top) + 100 == cordY &&
          parseInt(gameArea[i].style.left) == cordX
        ) {
          return i;
        }
      }
    } else {
      return -1;
    }
  }

  function down(x, y) {
    var cordX = parseInt(x);

    var cordY = parseInt(y);

    if (cordY < 300) {
      for (var i = 0; i < gameArea.length; i++) {
        if (
          parseInt(gameArea[i].style.top) - 100 == cordY &&
          parseInt(gameArea[i].style.left) == cordX
        ) {
          return i;
        }
      }
    } else {
      return -1;
    }
  }

  function swap(position) {
    var temp = gameArea[position].style.top;

    gameArea[position].style.top = spaceY;

    spaceY = temp;

    temp = gameArea[position].style.left;

    gameArea[position].style.left = spaceX;

    spaceX = temp;
  }
});
