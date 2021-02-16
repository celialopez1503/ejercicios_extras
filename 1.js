'use strict'

let año_introduce = prompt('introduce un año');
let introduce  = parseInt(año_introduce)

if (introduce%4==0){
    alert('el año es bisiesto')
} else if ((introduce+1)%4 == 0) {
    alert('El proximo año bisiesto' + (introduce+1))
} else if ((introduce+2)%4 == 0) {
    alert ('el proximo año bisiesto es' + (introduce+2))
}else if ((introduce+3)%4 == 0){
    alert(' el proximo año bisiesto es ' + (introduce+3))
}

