var rev = function (x){
  let reverse =0;
  while(x>0){
    let rem = x%10;
    reverse  =(reverse*10)+rem;
    x =Math.floor(x/10);
  }
  return reverse
}

console.log(rev(104))