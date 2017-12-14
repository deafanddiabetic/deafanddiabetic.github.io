function pyth(sideA, sideB){
    var cSquared = sideA*sideA + sideB*sideB;
    var sideC = Math.sqrt(cSquared);
    return sideC;
}

function randomNumber(min, max){
    min = parseInt(min);
    max = max * 1;
    var diff = max - min;
    var number = Math.round(Math.random()*diff)+min;
    return number;
}

function randomColor(){
    var red = randomNumber(0, 255);
    var green = randomNumber(0, 255);
    var blue = randomNumber(0, 255);
    return "rgb("+red+","+green+","+blue+")";
}
    //"rgb(###,###,###)"

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