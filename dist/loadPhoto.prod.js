"use strict";$(document).ready(function(){$("#photoUpload").on("change",function(e){for(var a=e.target.files,t=a.length,n=0;n<t;n++){var o=a[n],l=new FileReader;l.onload=function(e){$("#uploaded").css("display","block"),$("#getResolution").css("display","inline-block");var a=e.target;$("<img>",{class:"originalImage",src:e.target.result,title:a.name}).insertAfter("#uploaded")},l.readAsDataURL(o)}})});