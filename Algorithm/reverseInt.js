//

// <---------- Reverse A Int ---------->


function reverseInt(n){
    let reversed = n.toString().split(" ").reverse().join('');
    reversed = parseInt(reversed)
    if(n<0){
        return reversed * -1;
    }
    return reversed;

}
 

console.log(reverseInt(12))