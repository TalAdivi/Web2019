// $ ("document").ready(function() {
//     // alert("hello world using JQuery");
//     console.log("Hello world using jQuery!");
// });


// $ ("document").ready(function() {
//     var c = $("<h1>Hello Worlddddddd</h1>");
//     var a = $("main").append(c);
//   //$("main").append("<img src=”images/1_qTld1o0TCh7lEB-BZBXMdw.png”>");
//     var b = $("main").append("<button>Click Here</button>");
//     console.log(b);
//     b.click(function(){c.css({"background-color":"red"})});
// });


// var input = $('input:checkbox');
// console.log(input);

function Img(iCurrentImg){
    this.iID = iCurrentImg;
    var imgObj = document.getElementById("img");
    imgObj.src = "images/img_" + parseInt(this.iID+1) + ",jpg";

    imgObj.className = "imgDyn";
    imgObj.style.marginLeft = (this.iID*100) + "px";

    var appendImg = function(){
        imgObj.addEventListener("click",onMinimize);
        document.getElementsByTagName("body")[0].appendChild(imgObj);
    };

    var onMinimize = function(){
        console.log("I was Minimaized");
    };

    this.getImgSrc = function(){
        return (imgObj.src);
    };

    this.setImgSrc = function(Sorce)
    {
        imgObj.src = Sorce;
    }
    appendImg();
}

function ImgsManager() {
    var iImgsNum = 4;

    for(var i = 0 ; i < iImgsNum ; ++i)
    {
        var imgObj = new Img(i);
        console.log("img "+i+" src is:" + imgObj.getImgSrc());
    }
  }
