var blackSquareMaker = document.getElementById("squareMaker");      //reference to square maker
var mainRef = document.getElementsByTagName("main")[0];             //reference to main
var globCounter = 0;                                                //counting squares
var validClickCounter = 0;                                          //counting clicks on squers only 
var arraySquare = [];                                               //all squares will insert here
var arrayLetter = [];                                               //letters will insert here and will be compared

(function Square() {
    var firstSquareCss = function(fSquare){
       fSquare.style.cssFloat = "Left";
       fSquare.style.height = 80 + "px";
       fSquare.style.width = 80 + "px";
       fSquare.style.background = "black";
       fSquare.style.margin = "64px";
       fSquare.style.color = "#ffffff";
       fSquare.style.fontSize = "64px";
       fSquare.style.display = "flex";
       fSquare.style.alignItems = "center";
       fSquare.style.textAlign = "center";
       fSquare.className =  "Square_" + globCounter++;
    }

    var firstSquare = document.createElement("section");
    firstSquareCss(firstSquare);
    arraySquare.push(firstSquare);
    currLen = arraySquare.length;                                   //global, there is functions that cant receive arraySquare.length as parameter.

})();

var generateLetter = function () {
    var letterOptions = "TALDIV";                                   //letter bank
    var newSpen = document.createElement("span");
    newSpen.style.display = "none";
    newSpen.style.margin = "auto";
    newSpen.innerText = letterOptions.charAt(Math.floor(Math.random() * letterOptions.length))
    arraySquare[currLen - 1].appendChild(newSpen);
}


blackSquareMaker.onclick = function () {    //creating 3 squares
                                            
    for (var i = 0; i < 3; ++i) {
        mainRef.appendChild(arraySquare[currLen - 1]);
        var squareStyle = window.getComputedStyle(arraySquare[currLen - 1]);
        var newSquare = arraySquare[currLen - 1].cloneNode(true);
        generateLetter();
        newSquare.style.width = parseInt(squareStyle.width) + 20 + "px";
        newSquare.style.height = parseInt(squareStyle.height) + 20 + "px";
        newSquare.style.fontSize = parseInt(squareStyle.fontSize) + 5 + "px"
        newSquare.className = "Square_" + globCounter++;                                //each square get unique class name
        arraySquare.push(newSquare);
        currLen = arraySquare.length;                                                   //updating currLen
    }
}

var parseSquare = function (squareSpan, squareIndex) {                              
    arrayLetter[validClickCounter++] = { letter: squareSpan, index: squareIndex };      //to save the former square details

    if (validClickCounter % 2 == 0) {                                                   //if there is 2 valid clicks start to compare
        var fLetter = arrayLetter[validClickCounter - 1].letter;
        var sLetter = arrayLetter[validClickCounter - 2].letter;
        var fIndex = arrayLetter[validClickCounter - 1].index;
        var sIndex = arrayLetter[validClickCounter - 2].index;
         validClickCounter = 0;                                                         //init valid clicks counter

        if (fLetter.innerText == sLetter.innerText && fIndex != sIndex) {               //if there is match between letters and its not the same square
            exposuredSquare(fIndex);
            exposuredSquare(sIndex);
        }

        else{
            setTimeout(function(){                                                      //the user can see for 0.5 sec the letter before disappear            
                fLetter.style.display = "none";
                sLetter.style.display = "none";        
                },500);
            }
        }

}

var exposuredSquare = function (squareIndex) {
    arraySquare[squareIndex].style.background = "#7fffd4";                               //change to different color 
    arraySquare[squareIndex].className = "exposured_" + squareIndex;                     //to make this square not enter "click" function agine
}

document.addEventListener("click", function (currSection) {
    var chekValidClick = /Square_/;

    if (currSection.target.className.search(chekValidClick) != -1) {                     //if the class name contains "Square_" to make sure its a valid click
        var arrayIndex = currSection.target.className.substring("Square_".length);
        arrayIndex = parseInt(arrayIndex);
        var s = arraySquare[arrayIndex];
        var x = s.firstChild;
        x.style.display = "block";                                                       //to see the letter
        parseSquare(x, arrayIndex);
    }
});
