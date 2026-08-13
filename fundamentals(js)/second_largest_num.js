function largest(arr){
  let largest = -Infinity;
  for(let i =0;i<arr.length;i++){
    if(arr[i]>largest){
      largest=arr[i];
    }
  }

  return largest;
}

function rln(arr,largenum){
  let arr1=arr.filter(n=>n!=largenum);
  return arr1;
}

let arr = [2,3,1,5,8,6];

let largestnum = largest(arr);
console.log(largestnum)
let arr1=rln(arr,largestnum);

let secondlargest = largest(arr1);
console.log(secondlargest)
