



function palindrome(s){
    let len = s.length;
    let start = s.substring(0, Math.floor(len/2)).toLowerCase();
    let end = s.substring(len - Math.floor(len/2)).toLowerCase();
    // Flip it
    let flip = end.split(' ').reverse().join('')
    return (
        start === flip
    )
    
}
console.log(palindrome("jack"))