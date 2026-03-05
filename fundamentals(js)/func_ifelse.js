
//sum
function add(a,b){
  console.log(a+b)
}

add(3,4)

//simple print
function greet(n){
  console.log("Hello, "+n);
}

greet("rohith");


//squareroot
function squareroot(n){
  let s = n**0.5
  return s;
}

let value = squareroot(6)

console.log(value)


//if else
//vote eligible
function vote(age){
  if (age<=0){
    console.log("are u even human?");
  }
  else if (age<18){
    console.log("below 18");
  }
  else if(age==18){
      console.log("is 18 years");
    }
  else{
    console.log("eligible to vote");
  }
}

vote(0)


//even or odd

function check(n){
  if(n%2==0){
    console.log(n+" is even number");
  }
  else{
    console.log(n+" is not even number");
  }
}

check(5)