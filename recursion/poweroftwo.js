function p(n){
   

    if(n==1){
        return true;
    }
    else if(n<1 || n%2 != 0){
        return false;
    }

    return p(n/2)


}

console.log(p(54))