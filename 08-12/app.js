// [In reply to Asilbek Topilov]
// function test(array,s,k=0){
//     s=parseFloat(s);
//     if(array.length>1){
//         if(array[0]===s){
//             k++;
//         }
//         for(let index=0;index<array.length-1;index++){
//             for(let j=index+1;j<array.length;j++){
//                 let sum=0;
//                 for(let n=0;n<=index;n++){
//                     sum+=array[n];
//                 }
//                 if((sum+array[j])/(index+2)===s) k++;
//                 console.log((sum+array[j]),(index+2),k)
//             }
//         }
//         array.splice(0,1)
//         return test(array,s,k)
//     }
//     else{
//         if(array[0]===s){
//             k++;
//         }
//         return k;
//     }
// }
// console.log(test([3,0,4,-1],2));