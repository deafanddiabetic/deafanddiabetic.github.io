function pTheorem(sideA, sideB){
    var sideCSquared = sideA*sideA + sideB*sideB;
    var sideC = Math.sqrt(sideCSquared);
    return sideC;
}

function randonNumGenerator(min, max){
    var differenceBetween = max - min;
    var number = Math.round(Math.random()*differenceBetween)+min;
    return number;
    

}
