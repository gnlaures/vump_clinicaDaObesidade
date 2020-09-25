// init base functions
$(window).on('load', function () {
    classOnBody($('main').attr('id'));
    scrollDirection();
    initGettersAndSetters();
    changeTouchClickText();
});
$(window).on('hashchange', function () {
    initGettersAndSetters();
});

// init AOS
if (is.not.ie()) {
    AOS.init();
} else {
    $('*').removeAttr("data-aos");
}

// l
if ($('.l-nav').length) {
    var propsNav = {
        active: 'is-active',
        scrollInit: 0,
        scrollClassScrolled: 99,
        scrollClassMiddle: 600,
        body: $('body'),
        nav: $('.l-nav'),
        hamburguer: $('.l-nav .c-hamburguer'),
        contentHero: $('.l-nav__contentHero'),
        mask: $('.l-nav__maskMenu'),
        maskAll: $('.l-nav__maskMenu.maskAll'),
    };

    function checkResponsiveMode() {
        var resultCheck;
        var displayCheck = propsNav.hamburguer.css('display');
        if (displayCheck !== 'none') {
            resultCheck = 'is-responsive';
            propsNav.nav.removeClass('is-desktop');
            propsNav.nav.addClass('is-responsive');
        } else {
            resultCheck = 'is-desktop';
            propsNav.nav.removeClass('is-responsive');
            propsNav.nav.addClass('is-desktop');
        }
        return resultCheck;
    }
    function closeAllSubMenus() {
        $('.c-subMenu').removeClass('is-active');
    }
    function closeResponsiveMenu() {
        propsNav.hamburguer.removeClass(propsNav.active);
        propsNav.contentHero.removeClass(propsNav.active);
    }
    function hideMaskMenu() {
        propsNav.mask.removeClass(propsNav.active);
    }
    function disableOverflow() {
        propsNav.body.addClass('u-overflowBlocked');
    }
    function enableOverflow() {
        propsNav.body.removeClass('u-overflowBlocked');
    }


    // RESPONSIVE MENU
    // - open / close
    propsNav.hamburguer.on('click', function() {
        if ($(this).hasClass(propsNav.active)) {
            // close menu
            enableOverflow();
            $(this).removeClass(propsNav.active);
            propsNav.maskAll.removeClass(propsNav.active);
            propsNav.contentHero.removeClass(propsNav.active);
        } else {
            // open menu
            disableOverflow();
            $(this).addClass(propsNav.active);
            propsNav.maskAll.addClass(propsNav.active);
            propsNav.contentHero.addClass(propsNav.active);
        }
    });
    // - close
    propsNav.maskAll.on('click', function(){
        closeResponsiveMenu();
        hideMaskMenu();
        closeAllSubMenus();
        enableOverflow();
    });


    // RESPONSIVE MODE
    $(window).on('resize', function() {
        if (checkResponsiveMode() === "is-desktop") {
            if (propsNav.contentHero.hasClass(propsNav.active)) {
                closeAllSubMenus();
                closeResponsiveMenu();
                hideMaskMenu();
            }
        }
    });


    // SCROLL CHANGES
    $(window).on('load', function(event) {
        checkResponsiveMode();
        var scrollBody = $(this).scrollTop();
        if (scrollBody > 1) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
    });
    $(window).on('scroll', function() {
        var scrollBody = $(this).scrollTop();
        // scroll up to 99
        if (scrollBody > propsNav.scrollClassScrolled) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
        // middle class
        if (scrollBody > propsNav.scrollClassMiddle) {
            propsNav.nav.addClass('hidden');
            propsNav.nav.addClass('scrolledMiddle');
        } else {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.removeClass('scrolledMiddle');
        }
        // scroll up or down
        if (scrollBody < propsNav.scrollInit) {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.addClass('scrolledUp');
            propsNav.nav.removeClass('scrolledDown');
        } else {
            propsNav.nav.removeClass('scrolledUp');
            propsNav.nav.addClass('scrolledDown');
        }
        // close menus on hidden nav
        if(propsNav.nav.hasClass('hidden')) {
            closeAllSubMenus();
            hideMaskMenu();
        }
        // reference var
        propsNav.scrollInit = scrollBody;
    });

}
if ($('.l-headerHome').length) {
    $('.js-scrollContent').on('click', function(e) {
        e.preventDefault();
        var finalDestiny = '#page__home';
        goToSection__scroll(finalDestiny, 70, 70, 800, 5);
    });
}
if ($('.l-fixedSocial').length) {
    $(window).on('scroll', function () {stickyPosition('.l-fixedSocial', 10, get__navHeight() + 10);});
    $(window).on('load', function () {stickyPosition('.l-fixedSocial', 10, get__navHeight() + 10);});
}

// s
if ($('.s-callStructure').length) {
    $(window).on('load', function() {
        setTimeout(function () {
            var swiper__headerHome = new Swiper('.s-callStructure__swiper > .swiper-container', {
                speed: 400,
                spaceBetween: 0,
                loop: true,
                navigation: {
                    nextEl: '.s-callStructure__swiper .swiper-button-next',
                    prevEl: '.s-callStructure__swiper .swiper-button-prev',
                },
                effect: 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 10,
                    shadowScale: 0.65,
                },
            });
        }, 50);

    });
}
if ($('.s-installations').length) {
    $(window).on('load', function() {
        setTimeout(function () {
            var swiper__headerHome = new Swiper('.s-installations__swiper > .swiper-container', {
                speed: 400,
                spaceBetween: 0,
                loop: true,
                autoHeight: true,
                navigation: {
                    nextEl: '.s-installations__swiper .swiper-button-next',
                    prevEl: '.s-installations__swiper .swiper-button-prev',
                }
            });
        }, 50);
    });
}
if ($('.s-benefits').length) {
    $(window).on('load', function() {
        setTimeout(function () {
            var swiper__headerHome = new Swiper('.s-benefits__swiper > .swiper-container', {
                speed: 400,
                spaceBetween: 0,
                slidesPerView: 4,
                loop: true,
                navigation: {
                    nextEl: '.s-benefits__swiper .swiper-button-next',
                    prevEl: '.s-benefits__swiper .swiper-button-prev',
                },
                breakpoints: {
                    630: {
                        slidesPerView: 1,
                    },
                    830: {
                        slidesPerView: 2,
                    },
                    1130: {
                        slidesPerView: 3,
                    }
                }
            });
        }, 50);
    });
}
if ($('.s-extraInfos').length) {
    $(window).on('load', function() {
        setTimeout(function () {
            var swiper__headerHome = new Swiper('.s-extraInfos__swiper > .swiper-container', {
                speed: 400,
                spaceBetween: 0,
                slidesPerView: 2,
                navigation: {
                    nextEl: '.s-extraInfos__swiper .swiper-button-next',
                    prevEl: '.s-extraInfos__swiper .swiper-button-prev',
                },
                breakpoints: {
                    1030: {
                        slidesPerView: 1,
                    }
                }
            });
        }, 50);
    });
}