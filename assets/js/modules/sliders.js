import $ from 'jquery'
import 'owl.carousel'

const defaultConfig = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {items: 1},
        576: {items: 2},
        768: {items: 2},
        1024: {items: 3},
        1200: {items: 4}
    },
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
};

$('.projects-slides').owlCarousel({
    ...defaultConfig,
    mouseDrag: true,
    margin: 30,
});

$('.testimonials-slides').owlCarousel({
    ...defaultConfig,
    items: 1,
    animateOut: 'fadeOut',
    responsive: {},
});

$('.team-slides').owlCarousel({
    ...defaultConfig,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
});

$('.projects-image-slides').owlCarousel({
    ...defaultConfig,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    responsive: {
        0: {items: 1},
        768: {items: 2},
        1200: {items: 2},
    }
});

$('.partner-slides').owlCarousel({
    ...defaultConfig,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    responsive: {
        0: {items: 2},
        576: {items: 3},
        768: {items: 4},
        1200: {items: 6}
    }
});
