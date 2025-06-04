document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    console.info(`What are you looking for here ?`);

    const footerTextElement = document.getElementById("FooterText");
    footerTextElement.innerHTML = `Copyright © Negre Florian ${year}`;

    const link = document.getElementById("Zelda");
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("I told you not to click on this link !");
        console.warn("User attempted to click on the link.");
    });


});


$(document).ready(function() {
    const $btn = $(".btn-escape");
    const $wrap = $(".body");

    $btn.on("mouseover", function() {

        const maxTop = $wrap.innerHeight() - $btn.outerHeight();
        const maxLeft = $wrap.innerWidth() - $btn.outerWidth();

        $(this).css({ 
            top: Math.random() * maxTop + 'px',
            left: Math.random() * maxLeft + 'px'
        });
    });
});