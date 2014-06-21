/* 
    Program 1: Write a loop that makes seven calls to console.log to output the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######
    It may be useful to know that you can find the length of a string by writing .length after it
*/


var i = 7,count =1,pat ="";

while(i){
   var pattern = function(){
      for(j=0;j<count;j++){
         pat = pat + "#";
      }
      return(pat)
   };
   console.log(pattern());
   pat = "";
   count = count +1;
   i = i -1;
}
