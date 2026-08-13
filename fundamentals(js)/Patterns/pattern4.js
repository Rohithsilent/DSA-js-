//learnt
let n=9
for(let i=0;i<n;i++){
  let row="";
  for(let j=0;j<n-(i+1);j++){
    row+=" ";
  }
  for(let k=0;k<=i;k++){
    
    row+="*";
  }
  console.log(row);
}

//Mine

for(let i=n;i>0;i--){
  let row="";
  for(let j=0;j<i-1;j++){
    row+=" ";
    }
  for(let k=n;k>=i;k--){
    row+="*";
  }
  console.log(row);
}



