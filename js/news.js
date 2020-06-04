var pop = document.getElementById("idpop");

var viewBtn = document.getElementsByClassName("org-view");

var closeBtn = document.getElementsByClassName("closeBtn")[0];

var i;
for (i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener("click", function () {
    $(".pop").fadeIn("fast");
    console.log(viewBtn);
  });
}

closeBtn.addEventListener("click", function () {
  $(".pop").fadeOut("fast");
  console.log(123);
});
