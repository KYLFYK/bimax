AOS.init();

const slices = document.querySelectorAll('.slices')
const slideText = document.querySelectorAll('.first-text-item')

const rightArr = document.getElementById('arrRight')
const leftArr = document.getElementById('arrLeft')

const sliderTimer = 6000;

let currentSlide = 0


let nextSlide = function () {
    if (currentSlide >= (slices.length - 1)) {
        currentSlide = 0
    } else {
        currentSlide++
    }

    document.querySelector('.first-text-item.active').classList.remove('active')
    slideText[currentSlide].classList.add('active')

    document.querySelector('.slices.active').classList.remove('active')
    slices[currentSlide].classList.add('active')
}

let prevSlide = function () {
    if (currentSlide === 0) {
        currentSlide = slices.length - 1
    } else {
        currentSlide--
    }

    document.querySelector('.first-text-item.active').classList.remove('active')
    slideText[currentSlide].classList.add('active')

    document.querySelector('.slices.active').classList.remove('active')
    slices[currentSlide].classList.add('active')
}

let slideStart = setInterval(() => nextSlide(), sliderTimer)

rightArr.addEventListener('click', function() {
    nextSlide()

    clearInterval(slideStart)
    slideStart = setInterval(() => nextSlide(), sliderTimer)
})

leftArr.addEventListener('click', function() {
    prevSlide()

    clearInterval(slideStart)
    slideStart = setInterval(() => nextSlide(), sliderTimer)
})

const time = 50;

$(window).scroll(function(){
    let top = $('.stat__block').offset().top,
        sctop = $(this).scrollTop(),
        winh = $(this).height(),
        y = top - sctop - winh;
    if (y > 0 || -y > winh) {
        $('.count-anim').each(function(){
            return 0
        });
    }
    else {
        if ($('.count-anim').text()) {

        }
        else {
            $('.count-anim').each(function(){
                let i = 0,
                    num = $(this).data('num'),
                    step = num / 30,
                    that = $(this),
                    int = setInterval(function(){
                        if (i <= num) {
                            that.html(Math.ceil(i));
                        }
                        else {
                            clearInterval(int);
                        }
                        i+=step;
                    },time);
            });
        }
    }
});

$('.fth__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    prevArrow: $('.arr-left'),
    nextArrow: $('.arr-right')
});