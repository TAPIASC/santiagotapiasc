const fetchData = async (URL) => {//Antes de declarar la función (Async)
    try {
        const response = await fetch (URL)
        const data = response.json()
        return data
    } catch (error) {
        console.error(error)    
    }
     
}

const API = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=9'


const mostrarSimpson = (personajes) =>{
    const contenido = document.getElementById("si-perso")
    personajes.map((personaje) =>{
        contenido.innerHTML = contenido.innerHTML + `
        <div class="col s12 m4">
            <div class="card small horizontal">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator img-simp" src="${personaje.image}">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${personaje.character}</span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${personaje.character}<i class="material-icons right">close</i></span>
                    <p>${personaje.quote}</p>
                </div>
            </div>
        </div>
        
        `
        
    })
} 

const funcionInicial = async () => {
    let datos = await fetchData(API)  
    console.log(datos)  
    mostrarSimpson(datos);
}

funcionInicial(API)