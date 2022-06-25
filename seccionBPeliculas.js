class Pelicula{
    constructor(titulo, imagen, descripcion, link){
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.link = link;
    }
}

const peliculas = [
    new Pelicula("Capitán América: El primer vengador", "./assets/img/capitanamerica1.JPG", "Steve Rogers es un chico enclenque que ha sido rechazado en varias ocasiones al intentar alistarse para luchar contra los nazis durante la II Guerra Mundial. Un día recibe la oportunidad de someterse a un experimento que, en su caso, sale a la perfección. Tras someterse a un duro entrenamiento, Steve recibe su primera misión como Capitán América.", "https://youtu.be/6j2IJlC6gic"),
    new Pelicula("Capitana Marvel", "./assets/img/capitanamarvel.JPG", "Historia de orígenes de Carol Danvers, integrante de una raza de nobles guerreros que descubre quién es realmente tras su llegada a la Tierra. En nuestro planeta se verá envuelta en una terrible guerra entre dos razas alienígenas, luchando junto a un reducido grupo de aliados.", "https://youtu.be/0LHxvxdRnYc"),
    new Pelicula("Iron Man", "./assets/img/ironman1.JPG", "Tony Stark es multimillonario especializado en la fabricación de armas que tendrá que hacer frente a su turbio pasado después de sufrir un accidente. De hecho, llega a ser secuestrado, pero tras lograr escapar, iniciará su andadura con el legendario hombre de hierro.", "https://youtu.be/8ugaeA-nMTc"),
    new Pelicula("Iron Man 2", "./assets/img/ironman2.JPG", "Tony Stark ha desvelado que él es Iron Man, lo cual no tarda en tener consecuencias. Desde el gobierno pidiendo que comparta sus avances tecnológicos, algo que él no quiere hacer por su acaba en manos equivocadas, hasta la confrontación que sufre por parte de un antiguo trabajador de su compañía.", "https://youtu.be/BoohRoVA9WQ"),
    new Pelicula("El increíble Hulk", "./assets/img/hulk.JPG", "l científico Bruce Banner está dispuesto a lo que sea por dar con un antídoto que le permita librarse de su temible alter ego. Sin embargo, su amor por Betty Ross es tan fuerte que decide volver a la civilización pese a que está siendo perseguido por el ejército. Todo se complica aún más cuando un agente de la KGB se expone a una dosis de radicación aún mayor de la que le convirtió a él en Hulk.", "https://youtu.be/H3vQbMSVlDw"),
    new Pelicula("Thor", "./assets/img/thor.JPG", "La imprudencia de Thor, un guerrero arrogante, desata una guerra, lo que lleva a Odín, su padre, a desterrarle a la Tierra con el objetivo de que descubra el verdadero sentido de la humildad. Lo que quizá nadie esperaba es que un temible villano envíe a las fuerzas más oscuras de Asgard al mismo planeta, lo cual obligará a Thor a descubrir qué es lo que hace falta para ser un héroe de verdad.", "https://youtu.be/JOddp-nlNvQ"),
    new Pelicula("Los Vengadores", "./assets/img/avengers.JPG", "La llegada de un enemigo inesperado pone en peligro el futuro de nuestro planeta y sus habitantes, lo cual lleva a Nick Fury, director de SHIELD, a solicitar la ayuda de todos los superhéroes, quienes tendrán que luchar en equipo por el bien mayor.", "https://youtu.be/eOrNdBpGMv8"),
    new Pelicula("Thor: El mundo oscuro", "./assets/img/thoroscuro.JPG", "Thor luchará contra una antigua raza liderada por el temible Malekith para restablecer el orden en el cosmos. Ni siquiera Odín se atrevió en su momento a enfrentarse a él, por lo que el Dios del Trueno emprenderá un peligroso viaje en el que tendrá que sacrificarlo todo para salvar el mundo.", "https://youtu.be/jmVa1kNDnWA"),
    new Pelicula("Iron Man 3", "./assets/img/ironman3.JPG", "Tony Stark ha de enfrentarse a un nuevo enemigo cuyo poder parece no tener límite. Atacado de forma personal, Iron Man emprenderá una búsqueda angustiosa para dar con los responsables de lo sucedido. Eso le llevará a verse a obligado a sobrevivir valiéndose por sus propios medios, su ingenio y su instinto.", "https://youtu.be/Ke1Y3P9D0Bc"),
    new Pelicula("Capitán América: Soldado de Invierno", "./assets/img/soldadodeinvierno.JPG", "Steve Rogers sigue aclimatándose al mundo moderno en Washington, pero acaba viéndose envuelto en una trama de intrigas que pone en peligro a nuestro planeta. Eso hará que una fuerzas con Viuda Negra y Halcón para desenmascarar a los conspiradores, entre los que encontrará un enemigo tan inesperado como poderoso: el Soldado de Invierno.", "https://youtu.be/Ics4g1xppFg"),
    new Pelicula("Guardianes de la Galaxia", "./assets/img/guardianes1.JPG", "El aventurero Peter Quill se verá perseguido por un temible cazarrecompensas después de robar una esfera que anhela el poderoso Ronan. Para lograr salir con vida, tendrá que formar alianza con un cuarteto de inadaptados de lo más peculiar.", "https://youtu.be/F60FZKt_36s"),
    new Pelicula("Guardianes de la Galaxia Vol. 2", "./assets/img/guardianes2.JPG", "Los Guardianes deberán luchar para mantener unida a su nueva familia mientras intentan resolver el misterio de los verdaderos orígenes de Peter Quill. Viejos rivales se convertirán en nuevos aliados, y queridos personajes de los cómics clásicos acudirán en ayuda de nuestros héroes a medida que el universo cinematográfico de Marvel continúa expandiéndose.", "https://youtu.be/fCPEpGpem3I"),
    new Pelicula("Vengadores: La era de Ultrón", "./assets/img/ultron.JPG", "Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz, las cosas empiezan a torcerse y los héroes más poderosos de la Tierra, incluyendo a Iron Man, Capitán América, Thor, El Increíble Hulk, Viuda Negra y Ojo de Halcón, tendrán que afrontar la prueba definitiva cuando el destino del planeta se ponga en juego. Cuando el villano Ultrón emerge, le corresponderá a Los Vengadores detener sus terribles planes, que junto a incómodas alianzas llevarán a una inesperada acción que allanará el camino para una épica y única aventura.", "https://youtu.be/DMFBm_lp4rU"),
    new Pelicula("Ant-Man", "./assets/img/antman.JPG", "Tras abandonar la cárcel, el ladrón y estafador Scott Lang recibe la llamada del misterioso Dr. Hank Pym para realizar un trabajo especial. El científico suministra al joven un traje especial, que le otorgar la capacidad de reducir su tamaño al de un insecto, al tiempo que aumenta considerablemente su fuerza. Con esta nueva arma en su poder, capaz de comunicarse con los insectos, Lang deberá abrazar su héroe interior, olvidar su pasado de delincuente y tratar de salvar al mundo de una terrible amenaza.", "https://youtu.be/pWdKf3MneyI"),
    new Pelicula("Capitán América: Civil War", "./assets/img/civilwar.JPG", "Después de que otro incidente internacional involucre a Los Vengadores, causando varios daños colaterales, aumentan las presiones políticas para instaurar un sistema que exija más responsabilidades y que determine cuándo deben contratar los servicios del grupo de superhéroes. Esta nueva situación dividirá a Los Vengadores, mientras intentan proteger al mundo de un nuevo y terrible villano. Tercera entrega de la saga Capitán América.", "https://youtu.be/dKrVegVI0Us"),
    new Pelicula("Spider-Man: Homecoming", "./assets/img/spiderman.JPG", "Peter Parker comienza a experimentar su recién descubierta identidad como el superhéroe Spider-Man. Después de la experiencia vivida con los Vengadores, Peter regresa a casa, donde vive con su tía . Bajo la atenta mirada de su mentor Tony Stark, Peter intenta mantener una vida normal como cualquier joven de su edad, pero interrumpe en su rutina diaria el nuevo villano Vulture y, con él, lo más importante de la vida de Peter comenzará a verse amenazado.", "https://youtu.be/U0D3AOldjMU"),
    new Pelicula("Viuda Negra", "./assets/img/viudanegra.JPG", "Natasha Romanoff, alias Viuda Negra, se enfrenta a los capítulos más oscuros de su historia cuando surge una peligrosa conspiración relacionada con su pasado. Perseguida por una fuerza que no se detendrá ante nada para acabar con ella, Natasha debe lidiar con su historia como espía y con la estela de relaciones destruidas que dejó atrás mucho antes de convertirse en Vengadora.", "https://youtu.be/ybji16u608U"),
    new Pelicula("Black Panther", "./assets/img/panteranegra.JPG", "T'Challa vuelve a casa, a la nación de Wakanda, aislada y muy avanzada tecnológicamente, para ser proclamado Rey. Pero la reaparición de un viejo enemigo pone a prueba el temple de T'Challa como Rey y Black Panther ya que se ve arrastrado a un conflicto que pone en peligro todo el destino de Wakanda y del mundo.", "https://youtu.be/xjDjIWPwcPU")
];

function mostrarMas(pelicula){
    const contenedorDePeliculas = document.getElementById("sectionB");
    contenedorDePeliculas.innerHTML = "";

    const detallesDiv = document.createElement("div");
    detallesDiv.classList.add("detalles-card");

    detallesDiv.innerHTML = `
    <h1 class="titulo-principal">${pelicula.titulo}</h1>
    <img src ="${pelicula.imagen}" class="img-principal" alt ="${pelicula.titulo}">
    <p class="descripcion-principal">${pelicula.descripcion}</p>
    <a href="${pelicula.link}" class="trailer-principal">Ver trailer</a>
    `;

    contenedorDePeliculas.appendChild(detallesDiv);
}

function mostrarPeliculas(peliculas){
    const contenedorDePeliculas = document.getElementById("sectionB");
    contenedorDePeliculas.innerHTML = "";

    peliculas.forEach(pelicula => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");

        divCard.innerHTML = `
        <h3 class="titulos">${pelicula.titulo}</h3>
        <img src ="${pelicula.imagen}" class= "imgs" alt ="${pelicula.titulo}">
        <a href="${pelicula.link}">Trailer</a>
        `;

        const botonVerMas = document.createElement("button");
        botonVerMas.innerText = "VER MÁS";
        botonVerMas.classList.add("boton-verMas");
        botonVerMas.addEventListener("click", () => {
            mostrarMas(pelicula);
            botonVolverAtras();
        });

        divCard.appendChild(botonVerMas);

        contenedorDePeliculas.appendChild(divCard);
    });
}

function botonVolverAtras(){
    const botonVolver = document.createElement("button");
    botonVolver.classList.add("boton-volver");
    botonVolver.innerText = "  ← ";
    botonVolver.addEventListener("click", () =>{
        mostrarPeliculas(peliculas);
    });

    document.getElementById("sectionB").prepend(botonVolver);
}

mostrarPeliculas(peliculas);

