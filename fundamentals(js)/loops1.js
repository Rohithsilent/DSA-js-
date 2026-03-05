//loops
//for loop dumbass
for(let i=0;i<=10;i++){
  console.log("printing "+i+"th time");
}

//i++ and i+1 are not same i+1 doesn't change the value of i it just calculates the i+1 value and i++ changes the value 
//but i++ and i=i+1 are same
//well this is nuts
//example:
let r = 5
r+1;
console.log(r);
r++;
console.log(r);

//i++ and ++i are identical but not same
//i++ first returns the value and increments 
//++i Increments first, then returns the new value
//this is fucking confusing to me at first like why do you need two fucking logic for same function but i understood this after encountering a usecase
//one of greatest mystery of my programming journey solved.........................
//example:
//i++
let a = 5;
let y = a++;
console.log(y);  // 5 (old value returned)
console.log(a);  // 6 (a was incremented)
//++i
let b = 5;
let x = ++b;
console.log(x);  // 6 (new value returned)
console.log(b);  // 6 ( was incremented)


let arr=[2,3,4,6,7,88,9]
let length = arr.length
for(let i=0;i<length;i++){
  console.log("array "+i+": "+arr[i]);
}


//even number in an array

for ( let i =0;i<length;i++){
  if (arr[i]%2==0){
    console.log(arr[i]);
  }
}

//using while

let v =0

while(v<length){
  if(arr[v]%2==0){
    console.log(arr[v])
  }
  ++v;
}


