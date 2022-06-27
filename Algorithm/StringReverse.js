 // Reverse the string 
 // First Step: Convert the string into an array
 // Second: Then use reverse method in array
 // Third :  Convert back this array inside string.


 function rev(str){
    const arr = str.split('');
    arr.reverse();
    const res = arr.join('')
    return res;
 }

 console.log( rev("Inzamam"))