
// main slide
var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 4,
  observer: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//tap-menu 
$(".best-menu li").click(function() {
  $(".best-menu li span").removeClass("active"); // 전체 초기화
  $(this).find("span").toggleClass("active");    // 클릭한 것만 토글

   // 모든 영역 숨기기
    $(".sec-1_img-wrap").removeClass("active-2");

   // 클릭한 메뉴의 data-target 값 가져오기
    let target = $(this).find("span").data("target");

   // 해당 클래스만 보여주기
    $("." + target).addClass("active-2");
});

$(".new-menu li").click(function() {
  $(".new-menu li span").removeClass("active"); // 전체 초기화
  $(this).find("span").toggleClass("active");    // 클릭한 것만 토글

   // 모든 영역 숨기기
    $(".sec-3_img-wrap").removeClass("active-4");

   // 클릭한 메뉴의 data-target 값 가져오기
    let target = $(this).find("span").data("target");

   // 해당 클래스만 보여주기
    $("." + target).addClass("active-4");
});