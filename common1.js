function pyth(sideA, sideB){
    var cSquared = sideA*sideA + sideB*sideB;
    var sideC = Math.sqrt(cSquared);
    return sideC;
}

//pythagreon theorem//

function randomNumber(min, max){
    min = parseInt(min);
    max = max * 1;
    var diff = max - min;
    var number = Math.round(Math.random()*diff)+min;
    return number;
}

//random number generator//

function randomColor(){
    var red = randomNumber(0, 255);
    var green = randomNumber(0, 255);
    var blue = randomNumber(0, 255);
    return "rgb("+red+","+green+","+blue+")";
}
    //"rgb(###,###,###)"//
//random color generator//

        $.fn.rainbowfy = function(options){
            var defaults = $.extend({
                sameColor: true
                }, options);
            
            if(defaults.sameColor){
                $(this).css("background-color", randomColor());
                $(this).css("color", randomColor());
            }else{
                      $(this).each(function(e){
                $(this).css("background-color", randomColor());
                $(this).css("color", randomColor());
            });
            }
            return this;
                };

//stuff//

const kelvin= prompt('What is the Kelvin temperature today?');
//kelvin will stay constant//
const celsius= kelvin - 273;
//celsius is 273 degrees less than kelvin//
let fahrenheit = celsius * (9/5) + 32;
//algorithm for farenheit from celsius//
fahrenheit = Math.floor(fahrenheit);
//rounding temp number from decimal//
console.log(`The tempurature is ${fahrenheit} degrees fahrenheit. `);

//temperature prompt script converting Kelvin//