function countDigits(n){
  if(n==0) return 1;

  n = Math.abs(n);//turns to positive number

  let count =0;
  while(n>0){
    n=Math.floor(n/10);//converts decimal to real
    count++;
  }

  return count;
  
}

let num = -200

let result = countDigits(num);
console.log(result);