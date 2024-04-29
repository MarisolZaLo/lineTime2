//MODAL 1
document.querySelectorAll('#content1').forEach(item => {
    item.addEventListener('click', function() {
        // Mostrar el modal 1
        document.getElementById('modal1').style.display = 'block';
    });
});

//MODAL 2
document.querySelectorAll('#content2').forEach(item => {
    item.addEventListener('click', function() {
        // Mostrar el modal 2
        document.getElementById('modal2').style.display = 'block';
    });
});

// Obtener el elemento que cierra el modal 1
var closeButton1 = document.querySelector('#modal1 .close-button');

// Cuando el usuario hace clic en (x) del modal 1, cierra el modal
closeButton1.onclick = function() {
    document.getElementById('modal1').style.display = 'none';
}

// Obtener el elemento que cierra el modal 2
var closeButton2 = document.querySelector('#modal2 .close-button');

// Cuando el usuario hace clic en (x) del modal 2, cierra el modal
closeButton2.onclick = function() {
    document.getElementById('modal2').style.display = 'none';
}


//ANIMACIÓN DE TRANSICION
document.addEventListener("DOMContentLoaded", function() {
    function checkVisibility() {
        var elements = document.querySelectorAll(".content");
        var windowHeight = window.innerHeight;

        elements.forEach(function(element) {
            var positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 100) {
                element.classList.add("_show");
            } else {
                element.classList.remove("_show");
            }
        });
    }

    // Ejecutar la función una vez al cargar la página
    checkVisibility();

    // Ejecutar la función cada vez que se haga scroll
    window.addEventListener("scroll", checkVisibility);
});


//ANIMACIÓN DE CARRUSEL

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("carousel-item");
  
    // Ocultar todas las diapositivas
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
  
    // Asegurarse de que el índice esté dentro del rango de las diapositivas
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
  
    // Mostrar la diapositiva correspondiente
    slides[slideIndex-1].style.display = "block";  
}
