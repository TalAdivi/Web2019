var errNumber = 2;
var qaLine = 'HelloWorld';

console.log('Great');
console.error('Error',errNumber);
console.warn('Are you');
console.debug('this line',qaLine);



window.onload = function () {
 document.getElementById( "btn").onclick = show;
   }


var show = function()
{
    // var x = document.getElementById("pageTitle");
    // if(x.innerHTML.includes("second"))
    //     document.getElementById("pageTitle").innerHTML="<h1>Main Title</h1>";
    // else{
        document.getElementById("pageTitle").innerHTML="<i> second!</i>";       
    // }
}




// (function() { 
//     var a = b = 5;
//    })();

//    console.log(a);



// var a = 8;
// var b = 2;

// (function () {
// a = 10;
// b = 5;
// console.log( 'first',a + b)
// })();

// console.log('sec',a)
// console.log('thired',b)
   

