//Lista de la compra
const lista1 = ['Leche', 'Huevos', 'Aguacates', 'Atún', 'Aceitunas']
lista1.push('Aceite_de_girasol')

console.log(lista1)

lista1.pop('Aceite_de_girasol')
console.log(lista1)

//Lista 3 peliculas favoritas
const listaObjetos = [
    { titulo: "Harry Potter y la piedra filosofal", director: "Chris Columbus", fecha: 2001 },
    { titulo: "El señor de los anillos", director: "Peter Jackson", fecha: 2001 },
    { titulo:'Liga de la justicia', director: "Zack Snyder" , fecha: 2017 }
]

//Peliculas posteriores 2010 FILTER
const peliculasPosteriores = listaObjetos.filter(obj => obj.fecha >2010)
console.log(peliculasPosteriores)

//Directores películas MAP
const directorList = listaObjetos.map(function(listaObjetos) {
    return listaObjetos.director
})
console.log(directorList)

//Titulos de las películas oríginal MAP
const titleList = listaObjetos.map(function(listaObjetos) {
    return listaObjetos.titulo
})
console.log(titleList)

//Lista concatenada de directores y títulos CONCAT
console.log(directorList.concat(titleList))

//Lista concatenada de directores y títulos PROPAGACIÓN
const listaconcat = [...directorList, ...titleList]
console.log (listaconcat)

