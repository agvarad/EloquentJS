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
