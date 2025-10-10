const times = [
    "Palmeiras",
    "Santos",
    "Corinthians",
    "Flamengo",
    "São Paulo",
    "Cruzeiro",
    "Fluminense",
    "Vasco da Gama",
    "Internacional",
    "Grêmio",
    "Botafogo",
    "Bahia",
    "Atlético Mineiro",
    "Sport",
    "Vitória",
    "Fortaleza",
    "Red Bull Bragantino",
    "Juventude",
    "Ceará",
    "Mirassol"
];

// const logoTimes = [
// "https://logodetimes.com/times/palmeiras/logo-palmeiras-2048.png",
// "https://logodetimes.com/times/santos/logo-santos-1536.png",
// "https://logodetimes.com/times/corinthians/logo-corinthians-4096.png",
// "https://tse4.mm.bing.net/th/id/OIP.t1uHYflANlLwXk_0RTfFCgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
// "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-4096.png",
// "https://logodetimes.com/times/cruzeiro/logo-cruzeiro-1536.png",
// "https://tse1.mm.bing.net/th/id/OIP.Uren0VGOVqF4qsCZ1UvVGAHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
// "https://tse3.mm.bing.net/th/id/OIP.FEE6urHQOu_h61qTxNHaMAAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
// "",
// "",
// "",
// "",
// "",
// "",
// "",
// "",
// "",
// "",
// ""
// ]

const cidadesTimes = [
    "São Paulo",         // Palmeiras
    "Santos",            // Santos
    "São Paulo",         // Corinthians
    "Rio de Janeiro",    // Flamengo
    "São Paulo",         // São Paulo
    "Belo Horizonte",    // Cruzeiro
    "Rio de Janeiro",    // Fluminense
    "Rio de Janeiro",    // Vasco da Gama
    "Porto Alegre",      // Internacional
    "Porto Alegre",      // Grêmio
    "Rio de Janeiro",    // Botafogo
    "Salvador",          // Bahia
    "Belo Horizonte",    // Atlético Mineiro
    "Recife",            // Sport
    "Salvador",          // Vitória
    "Fortaleza",         // Fortaleza
    "Bragança Paulista", // Red Bull Bragantino
    "Caxias do Sul",     // Juventude
    "Fortaleza",         // Ceará
    "Mirassol"           // Mirassol
];

function fnListarTimes() {
    for (let i = 0; i < times.length; i++) {
        document.getElementById("lista_times").innerHTML += `
        <div class="col-6 border text-center">
        ${times[i]} - ${cidadesTimes[i]}
        </div>
        `
    }
}

fnListarTimes();