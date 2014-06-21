/*
Problem 3:  Write a program that creates a string that represents an 8 × 8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size , outputting a grid of the given width and height.
*/

var i = 8,pat = "";

while(i){
   var print_sequence = function(){
      for (k=0;k<4;k++){
         pat = pat + "# "
      }
      return(pat)
   } 
   console.log(print_sequence());
   pat = ""
   i = i -1;
}
