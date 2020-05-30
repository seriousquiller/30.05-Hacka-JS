
let mensaje = (alert("Bienvenido, su saldo es 5 Soles."));
let saldo=5
let apuesta= Number ( prompt ("Elige un numero del 1 al 6"))

let a = Number(prompt("Cuanto desea Apostar?"));

let num = Math.random();
let giro = num * 6;
let dado = parseInt (Math.ceil(giro));

console.log ("El número que salió es ", dado);

function ganancia (dado) { 
        let ganancia = apuesta * 6;
        let derrota = apuesta - saldo;
    if  (apuesta===dado) {
       
        console.log (ganancia);        
    }
    else if (apuestadado) {
       
        console.log (derrota);     
}
}



