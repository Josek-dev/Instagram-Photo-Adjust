$(document).ready(function() {

    window.onscroll = function() {
        stick();
    }   

    function stick() {
        var topBar = document.getElementById("author");
        
        if (window.pageYOffset > topBar.offsetTop) {
            //topBar.classList.add("sticky");
            $("#author").attr("class", "sticky");
        }
        else {
            topBar.classList.remove("sticky");
        }
    }

    var realWidth = 0;
	var realHeight = 0; 
    
        $("#photoUpload").on("change",function(e) {
            var files = e.target.files;
            var length = files.length;
            for (var i = 0; i < length; i++) {
                var f = files[i]
                var fileReader = new FileReader();
            
                fileReader.onload =
                (function(e) {
                    $("#uploaded").css("display", "block");
                    $("#getResolution").css("display", "inline-block");
                    var file = e.target;
                    $("<img>",{
                        class : "originalImage",
                        src : e.target.result,
                        title : file.name
                        }).insertAfter("#uploaded");                    
                });
                fileReader.readAsDataURL(f); }});
                $("#getResolution").click(function() {
                    var img = $(".originalImage");
                        
                    $("<img>").attr("src", $(img).attr("src")).on("load", function(){
                    var realWidth = this.width;
                    var realHeight = this.height;
                    $("#wymiary").text("Szerokosc: "+ realWidth +" Wyokosc: "+ realHeight);
                    });
                });
           
           
           
           
 });