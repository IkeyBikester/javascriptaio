/* thisis a basic javascript 
ball moving prog
*/

const ball = document.getElementById("ball");
document.addEventListener("keydown", handlekeyPress);
let position = 0;

function handlekeyPress(e) {
  if (e.code === "ArrowLeft") {
    position -= 20;
  }

  if (e.code === "ArrowRight") {
    position += 20;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}
//this is a test
function refresh() {
  ball.style.left = position + "px";
}
