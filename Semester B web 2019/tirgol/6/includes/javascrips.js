var errNumber = 2;
var qaLine = 'HelloWorld';



console.log('Great');
console.error('Error', errNumber);
console.warn('Are you');
debugger;
console.debug('this line', qaLine);

window.onload = function () {
    document.getElementById("btn").onclick = show;
    
    // var kid = searchInString("Adivi");

    // document.getElementById("text").innerHTML = "<h3>" + kid + "</h3>";
}


// var str = "TalAdivi";
// function findUppercase(string = [])
// {
//     var reg = new RegExp(/[A-Z]?/)
//     if(string.match(reg))
//     {
//         return "Starts with Uppercase";
//     }
//     else
//     {
//         return "Starts with Smallcase";
//     }
// }
// console.log(findUppercase(str));


// var show = function()
// {
//     var x = document.getElementById("pageTitle");
//     if(x.innerHTML.includes("Main"))
//     document.getElementById("pageTitle").innerHTML=  Date() ;
//     else{
//         document.getElementById("pageTitle").innerHTML="Main Title";       
//     }
// }


var show = function () {
    var x = document.getElementById("pageTitle");
    if (x.innerHTML == "Main Title")
        x.innerHTML = Date();
    else {
        x.innerHTML = "Main Title";
    }
}



// function searchInString(kidName = []) {
//     if (kidName.indexOf("f") != -1) {
//         kidName = "Hello " + kidName.substring(0, kidName.length);

//     }
//     else {
//         kidName += " Goodbye";
//     }

//     return kidName;

// }
// var person = {
//     firstName: "Tal",
//     lastName: "Adivi",
//     kids: "none",
//     adress: { country: "Israel", city: "Tel Aviv", street: "Einsten 29", zip: "85338" },
//     fullName() {
//         return this.firstName + " " + this.lastName;
//     },
//     hasKids() {
//         if (this.kids != "none") {
//             return true;
//         }
//         return false;
//     }
// };
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.kids);
// console.log(person.adress.country);
// console.log(person.adress.city);
// console.log(person.adress.street);
// console.log(person.adress.zip);
// console.log(person.fullName());
// console.log(person.hasKids());






// var fullname = 'John Doe';
// var obj = {
//     fullname: 'Colin Ihrig',
//     prop: 
//     {
//         fullname: 'Aurelio De Rosa',
//         getFullname: function ()
//          {
//             return this.fullname;
//         }
//     }
// };
// console.log(obj.prop.getFullname());
// var test = obj.prop.getFullname;
// console.log(this.fullname);


// const newLocal = { amount: 55, private: true, country: "Israel", singers: ["Tal", "Dafi", "Shushana"] };
// var objSongs = newLocal;


// var str = "TalAdivi Dafi Froimovici 1589702185555";
// str.indexOf("Tal")
// console.log(objSongs);
// var regex = /[1-5]/gi;  //between 1 to 5
// var regex = /[tdf]/gi;  //if the latters are in the sting
// var regex = /[^tdf]/gi; //if the latters are NOT in the sting
// var regex = /[0-9]/gi;  //between numbers are in the string
// var regex = /(b|f)/g;   //if b or f are in the string will print them       
// var regex = /\s/gi      //if there is a digit in string will print them all to to NOT write '\D' instad
// var regex = /a+/gi      //find all 'a' in string
// var regex = /5{4}/g     //fing 4 5's in the string 
// var str2 = "Dafi";

// document.write("<p>" + str.match(regex) + "</p>")

// document.write("<p>" + str.indexOf("fi") + "</p>"); //will print 11 because 'fi' starts at the string at index 11


// var add = (function () {                                 //
//     var counter = 0;                                     //  local variable counter, can be chagne only by innear func
//     return function () {counter += 1; return counter;}   //  
//   })();                                                  //



// var counter = 0;

// document.write("<table border='1'>");

// for(i=0 ; i <10 ; ++i)
// {
//     document.write("<tr>");
//     for(j = 0 ; j < 10 ; ++j)
//     {
//         document.write("<td>" + ++counter + "</td>");
//     }

//     document.write("</tr>");   
// }

// document.write("</table>");


// var grades = [80,70,70];

// for(index in grades)
// {
//     console.log(grades[index] += grades[index]);
// }

// var num = 5 ,stringNum = "5";

// console.log(num != stringNum);

// var arr = ["tal","adivi","dafi"];

// var box = [];

// console.log(arr.join('-'));
// alert(num + " " + stringNum);


// for(i = 0 ; i < 8 ; ++i)
// {
//     console.log(i + "\n");
// }

// console.log(Math.log2(32));

// console.log(document.createComment('TalAdivi'));


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



