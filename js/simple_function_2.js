var power_calculation = function(base,exponent){
    if (exponent == undefined)
        exponent = 2
    var result = 1;
    for(var i=0;i<exponent;i++)
       result *= base
    return result
}

console.log(power_calculation(4))
console.log(power_calculation(8,5))
console.log(power_calculation(3,6))
console.log(power_calculation(5,4))
