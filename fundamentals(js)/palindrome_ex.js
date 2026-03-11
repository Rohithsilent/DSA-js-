/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0;
    let xcopy = x;
    while(x>0){
        let rem = x%10;
        reverse = (reverse*10)+rem;
        x = x/10;
    }

    if(xcopy == reverse){
        return true;
    }
    else{
        return false;
    }
};