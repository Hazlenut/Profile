function movebox() {
  var element = document.getElementById("mainbox");
  element.classList.remove("moveback");
  element.classList.add("moveleft");
}
function goback() {
  var element = document.getElementById("backbutton");
  element.style.display = "block";
}
function moveboxback() {
  var element = document.getElementById("mainbox");
  element.classList.remove("moveleft");
  element.classList.add("moveback");
  document.getElementById("backbutton").style.display = "none";
  closeresume();
  closeprojects();
}
function openresume() {
  var element = document.getElementById("theresume");
  element.style.display = "block";
  element.classList.remove("startfadeout");
  element.classList.add("startfadein");
  element.style.visibility = "visible";
  closeprojects();
}
function closeresume() {
  var resume = document.getElementById("theresume");
  resume.classList.remove("startfadein");
  resume.classList.add("startfadeout");
  resume.style.display="none";
  resume.style.visibility="hidden";
}
function openprojects() {
  var element = document.getElementById("theprojects");
  element.style.display = "block";
  element.classList.remove("startfadeout");
  element.classList.add("startfadein");
  element.style.visibility = "visible";
  closeresume();
}
function closeprojects() {
  var projects = document.getElementById("theprojects");
  projects.classList.remove("startfadein");
  projects.classList.add("startfadeout");
  projects.style.display="none";
  projects.style.visibility="hidden";
}
function openProjectsTitle() {
  var element = document.getElementById("")
}
function getCurrentHover() {

}
function block1On() {
  var element= document.getElementById("b1");
  element.style.display = "block";
}
$(document).ready(function() {
  $("#b1").hover(function() {
    $("#title1").css("display","block");
  }, function() {
    $("#title1").css("display","none");
  });
});
$(document).ready(function() {
  $("#b2").hover(function() {
    $("#title2").css("display","block");
  }, function() {
    $("#title2").css("display","none");
  });
});
$(document).ready(function() {
  $("#b3").hover(function() {
    $("#title3").css("display","block");
  }, function() {
    $("#title3").css("display","none");
  });
});
$(document).ready(function() {
  $("#b4").hover(function() {
    $("#title4").css("display","block");
  }, function() {
    $("#title4").css("display","none");
  });
});
$(document).ready(function() {
  $("#b5").hover(function() {
    $("#title5").css("display","block");
  }, function() {
    $("#title5").css("display","none");
  });
});
$(document).ready(function() {
  $("#b6").hover(function() {
    $("#title6").css("display","block");
  }, function() {
    $("#title6").css("display","none");
  });
});
<<<<<<< HEAD
$(document).ready( function() {
$("#loading").on("load", () => {
  $(".opener").css("animation", "fadeOut 5s forwards")
});
});
=======
>>>>>>> ad062fd8f24fd9f11432e70186efbb0c3a6fef9c
