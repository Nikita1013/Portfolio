/*-----------------------toggle icon navbar-------------------------*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}

/*-----------------------scroll section active link -------------------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*-----------------------sticky navbar-------------------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*----------------------- remove toggle icon and navbar-------------------------*/
    menuIcon.classList.remove('fa-mark');
    navbar.classList.remove('active');
};

/*-----------------------scroll reveal-------------------------*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading',{origin : 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .education-img', {origin: 'left'});
ScrollReveal().reveal('home-contact p, .education-content', {origin : 'right'});

/*-----------------------Typed Js-------------------------*/
// const typed = new Typed('.multiple-text', {
//     strings: ['Frontend Developer', 'Web Designer', 'Software Developer'],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 100,
//     loop: true,
// });

/*-----------------------JQuery-----------------------------*/

$(document).ready(function() {
    $('#sevarohi').click(function() {
        window.location.href = 'https://www.ijnrd.org/papers/IJNRD2404139.pdf';
    });
});

$(document).ready(function() {
    $('#spotifyClone').click(function() {
        window.location.href = 'https://github.com/Nikita1013/Nikita-Web-Development-Projects/tree/master/Project/Spotify-Clone';
    });
});

$(document).ready(function() {
    $('#tictactoe').click(function() {
        window.location.href = 'https://github.com/Nikita1013/Nikita-Web-Development-Projects/tree/master/Project/Tic-Tac-Toe';
    });
});

$(document).ready(function() {
    $('#react').click(function() {
        window.location.href= 'https://github.com/Nikita1013/React';
    });
});

$(document).ready(function() {
    $('#python').click(function() {
        window.location.href = 'https://github.com/Nikita1013/Python-100-days-Challenge';
    });
});

$(document).ready(function() {
    $('#dotnet').click(function() {
        window.location.href = 'https://github.com/Nikita1013/DotNet';
    })
})

// /*--------------------Download (JS) ------------------*/
// document.getElementById('download-cv').addEventListener('click', function() {
//     var link = document.createElement('a');
//     link.href = 'https://drive.google.com/file/d/1lOx4hhiZ0Z5Z5tU4kRBrvRzQ3rk9bRt0/view?usp=drive_link';
//     link.download = 'Nikita_R_Shinde_Resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// });


/*--------------------Download (JQuery) ------------------*/
$('#download-cv').click(function() {
    var link = $('<a></a>')
        .attr('href', 'https://drive.google.com/uc?export=download&id=1lOx4hhiZ0Z5Z5tU4kRBrvRzQ3rk9bRt0')
        .attr('download', 'Nikita_R_Shinde_Resume.pdf') 
        .appendTo('body');
    link[0].click();
    link.remove();
});

//---------------------SCRIPT ------------------------
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.querySelector('.navbar');
    const menuItems = document.querySelectorAll('.navbar a'); // All menu items

    // Show navbar and change icons when the menu icon is clicked
    menuIcon.addEventListener('click', () => {
        navbar.classList.add('active'); // Show the navbar
        menuIcon.style.display = 'none'; // Hide menu icon
        closeIcon.style.display = 'block'; // Show close icon
    });

    // Hide navbar and change icons when the close icon is clicked
    closeIcon.addEventListener('click', () => {
        navbar.classList.remove('active'); // Hide the navbar
        menuIcon.style.display = 'block'; // Show menu icon
        closeIcon.style.display = 'none'; // Hide close icon
    });

    // Hide navbar and show only menu icon when clicking on a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            navbar.classList.remove('active'); // Hide the navbar
            menuIcon.style.display = 'block'; // Show menu icon
            closeIcon.style.display = 'none'; // Hide close icon
        });
    });
});

