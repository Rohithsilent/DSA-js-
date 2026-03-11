function secondLargest(arr){
    let sl_num=-Infinity;
    let fl_num=-Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>fl_num){
      sl_num = fl_num;
      fl_num = arr[i];
    }
    else if(arr[i]>sl_num && sl_num!=fl_num){
      sl_num = arr[i];
        }
  }
   return {sl_num,fl_num}; 
}

let arr =[3,5,2,5,6,4];

let {sl_num:second,fl_num:first} = secondLargest(arr);

console.log(second);
console.log(first);