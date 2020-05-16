"use strict";

function photoUploaded() {
  var zdj = document.getElementsByClassName("originalImage")[0];
  var originalWidth = zdj.naturalWidth;
  var originalHeight = zdj.naturalHeight;

  function getSquare() {
    if (originalWidth >= originalHeight) {
      originalWidth = originalHeight;
    } else {
      originalHeight = originalWidth;
    }

    return originalWidth;
  }

  getSquare();

  function createBackground() {
    var newWidth = originalWidth;
    var newHeight = originalWidth;
    img = new Image();
    img.src = zdj.src;

    img.onload = function () {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      var column = document.getElementById("righted");
      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.filter = "blur(50px)";
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      column.appendChild(canvas);
    };
  }

  document.querySelector("#transformuj").onclick = createBackground;
}