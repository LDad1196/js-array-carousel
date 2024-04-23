// Dichiarare variabili per passaggio slide
let immagineAttiva
let immagineProssima

let slides = document.getElementsByClassName("slides")



// Determinare Eventi che accadono al click del bottone next

document.getElementById("btnNext").addEventListener("click", function () {
    
    // Creare ciclo delle slide
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];

        // Scopriamo quale slide ha la classe .active
        if (slides.classList.contains("active")) {
            // se si rimuovi la classe .active
            slides.classList.remove("active")
            // prendiamo nota del numero della slide che contiene active
            immagineAttiva = i;     
        }
    
        
    }
    // Scriviamo la specifica di ImmagineProssima
    immagineProssima = immagineAttiva + 1;

    // Impopstiamo che riparte da 0 quando arriva all'ultima img
    if (immagineProssima >= slides.length) {
        immagineProssima = 0;
    }

    slides[immagineProssima].classList.add("active");

    console.log (`Sposto la selezione da ${immagineAttiva} a ${immagineProssima}`);
});

document.getElementById("btnPrev").addEventListener("click", function () {
    
    // Creare ciclo delle slide
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];

        // Scopriamo quale slide ha la classe .active
        if (slides.classList.contains("active")) {
            // se si rimuovi la classe .active
            slides.classList.remove("active")
            // prendiamo nota del numero della slide che contiene active
            immagineAttiva = i;     
        }
    
        
    }
    // Scriviamo la specifica di ImmagineProssima
    immagineProssima = immagineAttiva - 1;

    // Impopstiamo che riparte da 0 quando arriva all'ultima img
    if (immagineProssima >= slides.length) {
        immagineProssima = 4;
    }

    slides[immagineProssima].classList.add("active");

    console.log (`Sposto la selezione da ${immagineAttiva} a ${immagineProssima}`);
});

// Determinare Eventi che accadono al click del bottone next