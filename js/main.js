const testimonials = [
    "Robert White: TenderTouch has completely changed my life!",
    "Brenda Hendricks: I can finally live my life in complete comfort again.",
    "Karl Lloyd: I've rcommended TenderTouch to almost everyone I know.",
    "Diane Werner: I can't even remember how I lived without TenderTouch."
];

let currentIndex = 0;

const testimonialContainer = document.querySelector('.testimonial-container');
const nextButton = document.querySelector('.next-testimonial');

function updateTestimonial() {
    testimonialContainer.textContent = testimonials[currentIndex];
}

function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length; 
    updateTestimonial();
}

updateTestimonial();

nextButton.addEventListener('click', showNextTestimonial);
