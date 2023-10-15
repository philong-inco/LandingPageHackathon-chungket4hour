const n_open = document.getElementById('n_open'),
    n_close = document.getElementById('n_close'),
    n_menu = document.getElementById('n_menu');

if (n_open) {
    n_open.addEventListener('click', () => {
        n_menu.classList.add('n_show');
        n_close.style.display = 'block';
    })
}
if (n_close) {
    n_close.addEventListener('click', () => {
        n_menu.classList.remove('n_show');
        n_close.style.display = 'none';
    })
}

// slide

let slideindex = 0;
showslide();

function showslide() {
    let i;
    let slide = document.getElementsByClassName('slide');

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    slideindex++;
    if (slideindex > slide.length) {
        slideindex = 1;
    }
    slide[slideindex - 1].style.display = 'block';
    setTimeout(showslide, 5000);

}

// Hường
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


const backTop = document.getElementById('hbacktop')


window.onscroll = function () {
    if (window.pageYOffset > 100) {
        backTop.style.visibility = 'visible'
    } else {
        backTop.style.display = 'hidden'
    }
}


const boxes = document.querySelectorAll('.box')


window.addEventListener('scroll', checkBoxes)


checkBoxes();


function checkBoxes() {
    const strig = window.innerHeight / 5 * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < strig) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }


    });
}
