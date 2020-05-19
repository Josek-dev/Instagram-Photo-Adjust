function photoUploaded() {
    var zdj = document.getElementsByClassName("originalImage")[0];

    var originalWidth = zdj.naturalWidth;
    var originalHeight = zdj.naturalHeight;

    var getSquare = () => {
        if (originalWidth >= originalHeight) {
            var bgWidth = originalHeight
            var bgHeight = originalHeight;
            var newHeight = originalHeight*originalHeight/originalWidth;
            var newWidth = bgWidth;
            var span = (originalWidth-newWidth)/2;
        } else {
            var bgWidth = originalWidth;
            var bgHeight = originalWidth;
            var newWidth = originalWidth*originalWidth/originalHeight;
            var newHeight = bgHeight;
            var span = (originalHeight-newHeight)/2;
        }
        return {bgWidth,bgHeight,newWidth,newHeight,span};
    }

    function createBackground() {

        var {bgWidth,bgHeight,newWidth,newHeight,span} = getSquare();

        img = new Image();
        img.src = zdj.src;

        img.onload = function () {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            var column = document.getElementById("righted");
            canvas.width = bgWidth;
            canvas.height = bgHeight;
            ctx.filter = "blur(20px)";
            ctx.drawImage(img, 0, 0, bgWidth, bgHeight);
            column.appendChild(canvas);
            var canvas2 = document.createElement('canvas');
            ctx.filter = "blur(0px)";
            ctx.drawImage(img, span, 0, newWidth, newHeight);

        };
        console.log(bgWidth,bgHeight,newWidth,newHeight);
    }
    document.querySelector("#transformuj").onclick = createBackground;
    
}
