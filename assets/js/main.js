/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Sidebar Js
04. Cart Toggle Js
05. Search Js
06. Sticky Header Js
07. Data Background Js
08. Testimonial Slider Js
09. Slider Js (Home 3)
10. Brand Js
11. Tesimonial Js
12. Course Slider Js
13. Masonary Js
14. Wow Js
15. Data width Js
16. Cart Quantity Js
17. Show Login Toggle Js
18. Show Coupon Toggle Js
19. Create An Account Toggle Js
20. Shipping Box Toggle Js
21. Counter Js
22. Parallax Js
23. InHover Active Js
24. idari Personel Profili Js
25. Haber Sayfası Js
26. Arama Buton Js


****************************************************/

(function ($) {
"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
    // 01. PreLoader Js
	windowOn.on('load',function() {
		$("#loading").fadeOut(500);
	});


	////////////////////////////////////////////////////
    // 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
    // Mobile menüde diğer ana başlıklar expand edildiğinde, açık olanları kapatması sağlandı.
	$('.mean-expand').on('click', function (e) {
		e.preventDefault();
		$('li.has-dropdown').removeClass('dropdown-opened');
		$('li.has-dropdown>ul').hide();
		$('li.has-dropdown>a.mean-expand').removeClass('mean-clicked');
		if (jQuery(this).hasClass("mean-clicked")) {
			jQuery(this).prev('ul').slideUp(200, function () { });
		} else {
			jQuery(this).prev('ul').slideDown(200, function () { });
		}
		jQuery(this).toggleClass("mean-clicked");
	});

	////////////////////////////////////////////////////
    // 03. Sidebar Js
	$("#sidebar-toggle").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
    // 04. Cart Toggle Js
	$(".cart-toggle-btn").on("click", function () {
		$(".cartmini__wrapper").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".cartmini__close-btn").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".header__search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");has-dropdown
		$(".header__search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
    // 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});

	////////////////////////////////////////////////////
    // 07. Data Background Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

  
	////////////////////////////////////////////////////
    // 08. Testimonial Slider Js
	var swiper = new Swiper('.testimonial__slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	


	////////////////////////////////////////////////////
    // 09. Slider Js (Home 3)
	var galleryThumbs = new Swiper('.slider__nav', {
		spaceBetween: 0,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		
	});
	var galleryTop = new Swiper('.slider__wrapper', {
		spaceBetween: 0,
		effect: 'fade',
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});


	////////////////////////////////////////////////////
    // 10. Brand Js
	var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // Aynı anda kaç slayt gösterileceğini ayarlayın
    spaceBetween: 30, // Slaytlar arasındaki boşluğu ayarlayın
    loop: true, // Döngü özelliğini aktif hale getirin
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Otomatik kaydırma süresi (milisaniye cinsinden)
        disableOnInteraction: false, // Kullanıcı etkileşiminden sonra otomatik kaydırma devam eder
    },
});




	////////////////////////////////////////////////////
    // 11. Tesimonial Js
	var tesimonialThumb = new Swiper('.testimonial-nav', {
		spaceBetween: 20,
		slidesPerView: 3,
		loop: true,
		freeMode: true,
		loopedSlides: 3, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
	  });
	var testimonialText = new Swiper('.testimonial-text', {
	spaceBetween: 0,
	loop: true,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: tesimonialThumb,
	},
	});

	////////////////////////////////////////////////////
   	// 12. Course Slider Js
	var swiper = new Swiper('.course__slider', {
	spaceBetween: 30,
	slidesPerView: 2,
	breakpoints: {  
		'768': {
			slidesPerView: 2,
		},
		'576': {
			slidesPerView: 1,
		},
		'0': {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	});
	
	////////////////////////////////////////////////////
    // 13. Masonary Js
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
		  }
		});


	// filter items on button click
	$('.masonary-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.masonary-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	});


	////////////////////////////////////////////////////
    // 14. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
    // 15. Data width Js
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	  });
	

	////////////////////////////////////////////////////
    // 16. Cart Quantity Js
	$('.cart-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.cart-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

////////////////////////////////////////////////////



	////////////////////////////////////////////////////
	// 17. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 18. Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 19. Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 20. Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

	////////////////////////////////////////////////////
	// 21. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});
	
	////////////////////////////////////////////////////
	// 22. Parallax Js
	if ($('.scene').length > 0 ) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		}); 
	};



	////////////////////////////////////////////////////
    // 23. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	////////////////////////////////////////////////////
    // 24. idari Personel Profili Js

    document.addEventListener("DOMContentLoaded", function () {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});


////////////////////////////////////////////////////
    // 25. Haber Sayfası Js
document.addEventListener('DOMContentLoaded', function() {
    var increaseCount = 0;
    var decreaseCount = 0;
    var maxResize = 3;

    function resizeText(action) {
        var paragraphs = document.querySelectorAll('#content p');

        if (action === 'increase' && increaseCount < maxResize) {
            for (var i = 0; i < paragraphs.length; i++) {
                var style = window.getComputedStyle(paragraphs[i], null).getPropertyValue('font-size');
                var currentSize = parseFloat(style);
                paragraphs[i].style.fontSize = (currentSize + 2) + 'px';
            }
            increaseCount++;
            decreaseCount = Math.max(0, decreaseCount - 1);
        } else if (action === 'decrease' && decreaseCount < maxResize) {
            for (var i = 0; i < paragraphs.length; i++) {
                var style = window.getComputedStyle(paragraphs[i], null).getPropertyValue('font-size');
                var currentSize = parseFloat(style);
                paragraphs[i].style.fontSize = (currentSize - 2) + 'px';
            }
            decreaseCount++;
            increaseCount = Math.max(0, increaseCount - 1);
        } else if (action === 'reset') {
            for (var i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.fontSize = '16px'; // or any default size you prefer
            }
            increaseCount = 0;
            decreaseCount = 0;
        }

        document.getElementById('increaseBtn').disabled = (increaseCount >= maxResize);
        document.getElementById('decreaseBtn').disabled = (decreaseCount >= maxResize);
    }

    document.getElementById('increaseBtn').addEventListener('click', function() {
        resizeText('increase');
    });
    document.getElementById('decreaseBtn').addEventListener('click', function() {
        resizeText('decrease');
    });
    document.getElementById('resetBtn').addEventListener('click', function() {
        resizeText('reset');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery a');
    const lightbox = document.querySelector('.lightbox');
    const img = lightbox.querySelector('img');
    let currentIndex = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation(); // Sayfanın kaymasını engeller
            img.src = this.href;
            currentIndex = index;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Sayfanın kaymasını engelle
        });
    });

    document.querySelector('.lightbox-arrow.left').addEventListener('click', function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        img.src = galleryItems[currentIndex].href;
    });

    document.querySelector('.lightbox-arrow.right').addEventListener('click', function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % galleryItems.length;
        img.src = galleryItems[currentIndex].href;
    });

    document.querySelector('.lightbox-close').addEventListener('click', function (event) {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Sayfanın kaymasını geri aç
    });

    lightbox.addEventListener('click', function () {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Sayfanın kaymasını geri aç
    });
});

////////////////////////////////////////////////////
    // 26. Arama Js

   document.addEventListener("DOMContentLoaded", function() {
    function openSearchModal() {
        console.log("Open button clicked!"); // Kontrol için eklendi
        document.getElementById("searchModal").style.display = "block";
    };

    function closeSearchModal() {
        console.log("Close button clicked!"); // Kontrol için eklendi
        document.getElementById("searchModal").style.display = "none";
    };

    window.onclick = function(event) {
        var modal = document.getElementById("searchModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Açılır pencereyi tetikleyen işlevleri global hale getirme
    window.openSearchModal = openSearchModal;
    window.closeSearchModal = closeSearchModal;
});


})(jQuery);