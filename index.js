document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// first page show
function firstPage() {
    console.log("firstPage");
    document.getElementById("first-section").hidden = false;
    document.getElementById("second-section").hidden = true;
    document.getElementById("third-section").hidden = true;
    document.getElementById("contact-section").hidden = true;
    document.getElementById("javascript-section").hidden = true;
    document.getElementById("bootstrap-section").hidden = true;
    document.getElementById("test-case-section").hidden = true;
    document.getElementById("skill-page").hidden = true;
    document.getElementById("about-section").hidden = true;
}

// about page show
function aboutPage() {
    document.getElementById("about-section").hidden = false;
    document.getElementById("first-section").hidden = true;
    document.getElementById("second-section").hidden = true;
    document.getElementById("third-section").hidden = true;
    document.getElementById("contact-section").hidden = true;
    document.getElementById("javascript-section").hidden = true;
    document.getElementById("bootstrap-section").hidden = true;
    document.getElementById("test-case-section").hidden = true;
    document.getElementById("skill-page").hidden = true;
}

// Skills page show
function skillPage() {
    console.log("skillPage");
    document.getElementById("first-section").hidden = true;
    document.getElementById("second-section").hidden = true;
    document.getElementById("third-section").hidden = true;
    document.getElementById("contact-section").hidden = true;
    document.getElementById("javascript-section").hidden = true;
    document.getElementById("bootstrap-section").hidden = true;
    document.getElementById("test-case-section").hidden = true;
    document.getElementById("skill-page").hidden = false;
    document.getElementById("about-section").hidden = true;
}
// second page show
function secondPage() {
    console.log("secondPage");
    document.getElementById("first-section").hidden = true;
    document.getElementById("second-section").hidden = false;
    document.getElementById("third-section").hidden = true;
    document.getElementById("contact-section").hidden = true;
    document.getElementById("javascript-section").hidden = true;
    document.getElementById("bootstrap-section").hidden = true;
    document.getElementById("test-case-section").hidden = true;
    document.getElementById("skill-page").hidden = true;
    document.getElementById("about-section").hidden = true;

}
// html css page
// third page show (html and css project)
function thirdPage() {
    console.log("thirdPage");
    document.getElementById("first-section").hidden = true;
    document.getElementById("second-section").hidden = true;
    document.getElementById("third-section").hidden = false;
    document.getElementById("contact-section").hidden = true;
    document.getElementById("javascript-section").hidden = true;
    document.getElementById("bootstrap-section").hidden = true;
    document.getElementById("test-case-section").hidden = true;
    document.getElementById("skill-page").hidden = true;
    document.getElementById("about-section").hidden = true;
}
// javascript page
function javaScript() {
    console.log("thirdPage");
    document.getElementById("first-section").hidden = true;
    document.getElementById("second-section").hidden = true;
    document.getElementById("third-section").hidden = true;
    document.getElementById("contact-section").hidden = true;
    document.getElementById("javascript-section").hidden = false;
    document.getElementById("bootstrap-section").hidden = true;
    document.getElementById("test-case-section").hidden = true;
    document.getElementById("skill-page").hidden = true;
    document.getElementById("about-section").hidden = true;
}
// bootstrap page
function bootStrap() {
    console.log("thirdPage");
    document.getElementById("first-section").hidden = true;
    document.getElementById("second-section").hidden = true;
    document.getElementById("third-section").hidden = true;
    document.getElementById("contact-section").hidden = true;
    document.getElementById("javascript-section").hidden = true;
    document.getElementById("bootstrap-section").hidden = false;
    document.getElementById("test-case-section").hidden = true;
    document.getElementById("skill-page").hidden = true;
    document.getElementById("about-section").hidden = true;
}

// Test cases page
function testCases() {
    console.log("thirdPage");
    document.getElementById("first-section").hidden = true;
    document.getElementById("second-section").hidden = true;
    document.getElementById("third-section").hidden = true;
    document.getElementById("contact-section").hidden = true;
    document.getElementById("javascript-section").hidden = true;
    document.getElementById("bootstrap-section").hidden = true;
    document.getElementById("test-case-section").hidden = false;
    document.getElementById("skill-page").hidden = true;
    document.getElementById("about-section").hidden = true;
}

// contact page
function contactPage() {
    console.log("thirdPage");
    document.getElementById("first-section").hidden = true;
    document.getElementById("second-section").hidden = true;
    document.getElementById("third-section").hidden = true;
    document.getElementById("javascript-section").hidden = true;
    document.getElementById("contact-section").hidden = false;
    document.getElementById("bootstrap-section").hidden = true;
    document.getElementById("test-case-section").hidden = true;
    document.getElementById("skill-page").hidden = true;
    document.getElementById("about-section").hidden = true;

}

// first page show
window.onload = function () {
    firstPage();
}
