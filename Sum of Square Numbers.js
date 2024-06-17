var judgeSquareSum = function(c) {
    let arr = []; 
for (let i = 0; i < c; i++) {
  arr.push(i);
}
    let k=0;
    let s=1;
 for (let i=0;i<arr.length;i++){
     for(let j=1;j<arr.length;j++){
         if(arr[i]*arr[i]+arr[j]*arr[j]===c){
             return true;
         }
     }
 }
return false;
};
