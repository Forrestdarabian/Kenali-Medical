var sec = 0;
function pad(val) {
  return val > 9 ? val : "0" + val;
}
const countUp = setInterval(function() {
  if (sec < 25000) {
    $("#seconds").html(pad(++sec % 25000));
  } else {
    clearInterval(countUp);
  }
}, 500);
