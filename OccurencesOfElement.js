
const occurrencesOfElement = function(nums, queries, x) {
    let output=[];
    for(let i=0;i<queries.length;i++){
         let c=0;
         console.log("count times:",c)
         let found=-1;
         console.log("Loop executed timing:",i)
        for(let j=0;j<nums.length;j++){
            console.log("Loop::",j)
            if(nums[j]===x){
                c++;
                if(queries[i]===c){
                    console.log("printing count:",c)
                    found=j;
                    break;
                }
             }
        }
        output.push(found);

    }
   return output;
    }
    // let outputV= occurrencesOfElement([1,3,1,7],[1,3,2,4],1)
    // console.log(outputV);