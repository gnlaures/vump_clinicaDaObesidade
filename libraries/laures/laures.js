// getters and setters
function get__viewportW() {
    vw = $(window).width();
    return vw;
}
function get__navHeight() {
    hn = document.querySelector('.l-nav').clientHeight;
    return hn;
}
function get__page() {
    var fullUrl = window.location.href.split('/').reverse()[0];
    var testHash = fullUrl.split('#');
    if (testHash !== fullUrl) {
        fullUrl = testHash[0];
    }
    if ($.inArray(fullUrl, ['', undefined, null, 'home']) >= 0) {
        fullUrl = 'home';
    }
    return fullUrl;
}
function get__hash() {
    var hashOfThePage = window.location.hash;
    if ($.inArray(hashOfThePage, ['', undefined, null]) >= 0) {
        hashOfThePage = 'noHash';}
    return hashOfThePage;
}

function initGettersAndSetters() {
    get__viewportW();
    get__navHeight();
    get__page();
    get__hash();
    console.log('Page: ' + get__page() + ' | Hash: ' + get__hash());
}

// Limitação de caracteres
function limitCaracters(el, nMaxCaracters) {
    el.each(function() {
        var elText =  $(this).text();
        var minText = elText.substring(0, nMaxCaracters);
        var nCaractersTotal = elText.length;
        if (nCaractersTotal > nMaxCaracters) {
            $(this).text(minText.trim() + '...');
        } else {
            $(this).text(elText);
        }
    });
}
// Example:
// limitCaracters($('.elementoTESTE li div'), 50);


// substituir palavras quando for dispositivo for de toque
// necessita do plugin is.js para funcionar
function changeTouchClickText() {
    if (is.touchDevice()) {
        $('.js-changeString').each(function() {
            var str = $(this).text();
            console.log(str);
            if (str === 'clique') {
                $(this).html('toque');
            } else if (str === 'Clique') {
                $(this).html('Toque');
            }
        });
    } else {
        $('.js-changeString').each(function() {
            var str = $(this).text();
            console.log(str);
            if (str === 'toque') {
                $(this).html('clique');
            } else if (str === 'Toque') {
                $(this).html('Clique');
            }
        });
    }
}
// Example:
// $(window).on('load', changeTouchClickText());


// classe diferente no body para cada página
function classOnBody(el) {
    var mainId = el;
    var prefixClass = 'bodyClass--';
    $('body').addClass(prefixClass + mainId);
}
// Example:
// $(window).on('load', classOnBody($('main').attr('id')));


// Identifica direcao do scroll
function scrollDirection() {
    var scrollInit = 0;
    $(window).on('scroll', function() {
        var scrollBody = $(this).scrollTop();
        if (scrollBody < scrollInit) {
            $('body').removeClass('hidden');
            $('body').addClass('scrolledUp');
            $('body').removeClass('scrolledDown');
        } else {
            $('body').removeClass('scrolledUp');
            $('body').addClass('scrolledDown');
        }
        scrollInit = scrollBody;
    });
}
// Example:
// $(window).on('load', function() {scrollDirection();});


// link scroll
function goToSection__scroll(elScrollDestiny, distanceIfScrollGoingToUp, distanceIfScrollGoingToDown, speedScroll, delay) {
    console.clear();
    // scroll reference
    var scrollEfetuado = $(window).scrollTop();
    console.log(scrollEfetuado);
    // element reference
    var sectionDestiny_offsetTop = $(elScrollDestiny).offset().top;
    console.log(elScrollDestiny);
    console.log(sectionDestiny_offsetTop);

    if (scrollEfetuado > sectionDestiny_offsetTop) {
        console.log('vai subir');
        setTimeout(function(){
            $('html, body').animate({
                scrollTop: sectionDestiny_offsetTop - distanceIfScrollGoingToUp
            }, speedScroll);
        }, delay);
    } else {
        console.log('vai descer');
        setTimeout(function(){
            $('html, body').animate({
                scrollTop: sectionDestiny_offsetTop - distanceIfScrollGoingToDown
            }, speedScroll);
        }, delay);
    }
}
// Example:
// $('.js-linkScroll').on('click', function(e) {
//     e.preventDefault();
//     var finalDestiny = $(this).attr('href');
//     goToSection__scroll(finalDestiny, 100, 50, 700, 10);
// });


// position sticky control
function stickyPosition(stickyElement, initDistance, scrolledDistante) {
    var el = $(stickyElement);
    var nav = $('.l-nav');
    if (nav.hasClass('scrolled')) {
        if (nav.hasClass('hidden')) {
            el.css('top', initDistance);
        } else {
            el.css('top', scrolledDistante);
        }
    } else {
        el.css('top', initDistance);
    }
}
// Example;
// $(window).on('scroll', function () {stickyPosition('.u-stickyElement', 0, get__navHeight());});
// $(window).on('load', function () {stickyPosition('.u-stickyElement', 0, get__navHeight());});