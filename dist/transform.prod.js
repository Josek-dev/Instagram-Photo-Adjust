"use strict";function photoUploaded(){var e=document.getElementsByClassName("originalImage")[0],t=e.naturalWidth,n=e.naturalHeight;n<=t?t=n:n=t,document.querySelector("#transformuj").onclick=function(){var a=t,i=t;img=new Image,img.src=e.src,img.onload=function(){var e=document.createElement("canvas"),t=e.getContext("2d"),n=document.getElementById("righted");e.width=a,e.height=i,t.filter="blur(50px)",t.drawImage(img,0,0,a,i),n.appendChild(e)}}}