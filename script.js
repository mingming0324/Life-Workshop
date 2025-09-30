
gsap.registerPlugin(ScrollTrigger);

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

//sec-1 tap-menu 
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

// sec-3 tap
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

// sec-4



gsap.to(".sec-4_item-wrap", {
  y: () => {
    const parent = document.querySelector(".sec-4_img-wrap");
    return -(parent.clientHeight); 
    // 아이템 2개 고정 → 한 화면(700px)만큼 위로 올리면 두 번째 아이템이 보임
  },
  ease: "none",
  scrollTrigger: {
    trigger: ".sec-4",
    start: "top 10%",
    end: "bottom 90%",
    scrub: true,
    // pin: ".sec-4_big-img",   // 왼쪽 고정
    // markers: true
  }
});

// SEC-5
