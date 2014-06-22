/* 
Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean. Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

var isEven = function(number){
    if (Number(number) == 0 && Number(number)>0){
        return 0
    }
    else if (Number(number) == 1 && Number(number)>0){
        return 1
    }
    else{
        if(Number(number) >0){
            number -= 2
            return(isEven(number))
        }
        else{
            return(-1)
        }
    }
}

console.log("The number 50 is comes to", isEven(50), "when divided by 2. Hence its even.")
console.log("The number 75 is comes to", isEven(75), "when divided by 2. Hence its odd.")
console.log("The number -1 is comes to", isEven(-1), "when divided by 2. Hence its invalid.")
