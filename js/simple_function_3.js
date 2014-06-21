function wrap(factor){
    return function(number){
        return number * factor
    }
}

var twice = wrap(2)
console.log(twice(5))
