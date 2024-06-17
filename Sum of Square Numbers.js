var judgeSquareSum = function(c) {
 for (let i=0;i<arr.length;i++){
     for(let j=1;j<arr.length;j++){
         if(arr[i]*arr[i]+arr[j]*arr[j]===c){
             return true;
         }
     }
 }
return false;
};
