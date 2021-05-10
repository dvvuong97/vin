$('#leaders').slick({
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed:1000,
    slidesToShow: 2,
    slidesToScroll: 1
});

window.onload=function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed:1000,
    arrows:true,
    centerMode:true,
    slidesToShow:3,
    slidesToScroll:1
    });
  };
//dropdown menu mobile
  var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
  