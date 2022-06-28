 // Reverse the string 
 // First Step: Convert the string into an array
 // Second: Then use reverse method in array
 // Third :  Convert back this array inside string.

//               <-------------------BY Function--------------------->
//  function rev(str){
//     const arr = str.split('');
//     arr.reverse();
//     const res = arr.join('')
//     return res;
//  }

//  console.log( rev("Inzamam"))

// Alternate and simple way to reverse String

//               <-------------------BY For Loop--------------------->

function rev(str){

    let res = " ";
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        res = element + res;
        
    }
    return res;
}