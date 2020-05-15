"use strict";

$(document).ready(function () {
  var realWidth = 0;
  var realHeight = 0;
  $("#photoUpload").on("change", function (e) {
    var files = e.target.files;
    var length = files.length;

    for (var i = 0; i < length; i++) {
      var f = files[i];
      var fileReader = new FileReader();

      fileReader.onload = function (e) {
        $("#uploaded").css("display", "block");
        $("#getResolution").css("display", "inline-block");
        var file = e.target;
        $("<img>", {
          "class": "originalImage",
          src: e.target.result,
          title: file.name
        }).insertAfter("#uploaded");
      };

      fileReader.readAsDataURL(f);
    }
  });
  $("#getResolution").click(function () {
    var img = $(".originalImage");
    $("<img>").attr("src", $(img).attr("src")).on("load", function () {
      realWidth = this.width;
      realHeight = this.height;
      $("#wymiary").text("Szerokośc: " + realWidth + " Wysokość: " + realHeight);
    });
  });
  $("#sizeer").click(function () {
    if (realWidth >= realHeight) {
      realWidth = realHeight;
    } else {
      realHeight = realWidth;
    }

    alert(realWidth + "," + realHeight);
  });
});