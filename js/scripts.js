
$(document).ready(function () {
  $(".do").click(function () {
    $(".pen-showing").toggle();
    $(".pen-hidden").toggle();
  });
});
$(document).ready(function () {
  $(".dev").click(function () {
    $(".dev-showing").toggle();
    $(".dev-hidden").toggle();
  });
});
$(document).ready(function () {
  $(".list").click(function () {
    $(".list-showing").toggle();
    $(".list-hidden").toggle();
  });
});
$(document).ready(function () {
  $(".gray").mouseenter(function () {
    $(".blank-showing").toggle();
    $(".blank-hidden").toggle();
  });
});
$(".ontario").mouseenter(function () {
  $(".ontario-showing").toggle();
  $(".ontario-hidden").toggle();
});
$(".orange").mouseenter(function () {
  $(".orange-showing").toggle();
  $(".orange-hidden").toggle();
});
$(".hair").mouseenter(function () {
  $(".hair-showing").toggle();
  $(".hair-hidden").toggle();
});
$(".elena").mouseenter(function () {
  $(".elena-showing").toggle();
  $(".elena-hidden").toggle();
});
$(".button").mouseenter(function () {
  $(".button-showing").toggle();
  $(".button-hidden").toggle();
});
$(".burned").mouseenter(function () {
  $(".burned-showing").toggle();
  $(".burned-hidden").toggle();
});
$(".giraffe").mouseenter(function () {
  $(".giraffe-showing").toggle();
  $(".giraffe-hidden").toggle();
});
$(document).ready(function () {
  $(".gray").mouseleave(function () {
    $(".blank-showing").toggle();
    $(".blank-hidden").toggle();
  });
  $(".ontario").mouseleave(function () {
    $(".ontario-showing").toggle();
    $(".ontario-hidden").toggle();
  });
  $(".orange").mouseleave(function () {
    $(".orange-showing").toggle();
    $(".orange-hidden").toggle();
  });
  $(".hair").mouseleave(function () {
    $(".hair-showing").toggle();
    $(".hair-hidden").toggle();
  });
  $(".elena").mouseleave(function () {
    $(".elena-showing").toggle();
    $(".elena-hidden").toggle();
  });
  $(".button").mouseleave(function () {
    $(".button-showing").toggle();
    $(".button-hidden").toggle();
  });
  $(".burned").mouseleave(function () {
    $(".burned-showing").toggle();
    $(".burned-hidden").toggle();
  });
  $(".giraffe").mouseleave(function () {
    $(".giraffe-showing").toggle();
    $(".giraffe-hidden").toggle();
  });
});

function getInput() {
  var name = (document.getElementsByClassName("name").value);
  var mail = (document.getElementsByClassName("email").value);
  var message = (document.getElementsByClassName("message").value);


  if (name == "") {
    alert("Please give your name");
  }
  else if (mail == "") {
    alert("Please enter your email");
  }
  else if (message == "") {
    alert("Please write a message");
  }

  else {
    alert(" Thanks for sharing");
  }
};