// première déclaration de variable
let mango ;
console.log(mango) ; //undefined

// deuxième déclaration de variable
var mangue = 10 ;
console.log(mango) ; //manqo undefined

// troisième déclaration de variable
mango + 1 ;
console.log(mango) ; //mango undefined 

// quatrième déclaration de variable
mangue += 1 ;
//console.log(mangue) ; //11

//cinquième déclaration de variable
let banana = mangue ;
console.log(banane) ; //banane undefined

//Sixième déclaration de variable
banane = banane / 2 ;
console.log(banane) ; //banane undefined
console.log(mangue) ; //11
