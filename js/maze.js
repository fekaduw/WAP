var startClicked;
var hasLost = false;

$(function() {
  $(".boundary").mouseover(lost);
  $("#start").click(gameStarted);
  $("#end").mouseover(gameEnded);
  $("#maze").mouseleave(checkCheating);
});

function lost(e) {
  $(".boundary").addClass("youlose");

  $("#status").text("You lose!");

  hasLost = true;
}

function checkCheating(event) {
  if (startClicked && checkTarget(event.target)) {
    lost();
  }
}

function checkTarget(target) {
  return target.nodeName == "body" ? false : true;
}

function gameStarted() {
  startClicked = true;
  hasLost = false;
  $(".boundary").removeClass("youlose");
  $("#status").text('Click the "S" to begin.');
}

function gameEnded() {
  $("#status").text(
    startClicked && !hasLost
      ? "You win! :]"
      : "You need to start from the starting point"
  );

  startClicked = hasLost = false;
}
