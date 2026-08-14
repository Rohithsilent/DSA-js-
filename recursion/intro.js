function func(num){
    if(num == 0) return ;
    
     console.log(num);
     num -= 1;
     func(num);
    
    
}

function print(n){
    
    if(n>num) return ;    if(n>num) return ;


    console.log(n);
    n += 1;
    print(n);
}

function sum(n){
    if(n == 0) return 0;

    return n + sum(n-1);
}


num = 9
func(num)

print(1)


console.log(sum(5))