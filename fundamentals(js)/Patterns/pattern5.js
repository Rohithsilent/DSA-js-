let n=9
for(let i=0;i<n;i++){
  let row="";
  let s=1;
  for(let j=0;j<=i;j++){
    row+=s;
    if (s==1){
      s=0;
    }else{
        s=1;}
    }
console.log(row);
}