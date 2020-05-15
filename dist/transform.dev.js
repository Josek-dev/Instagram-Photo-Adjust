"use strict";

$("#getResolution").click(function () {
  var img = $(".originalImage");
  $("<img>").attr("src", $(img).attr("src")).on("load", function () {
    realWidth = this.width;
    realHeight = this.height;
    $("#wymiary").text("Szerokośc: " + realWidth + " Wysokość: " + realHeight);
  });
});

function getSize() {
  if (realWidth >= realHeight) {
    realWidth = realHeight;
  } else {
    realHeight = realWidth;
  }

  return realWidth;
  alert("Function completed");
}

var newWidth = realWidth;
var newHeight = realWidth;