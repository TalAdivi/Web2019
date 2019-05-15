(function () {
    console.log("Hello!!");  // I will invoke myself
  })();

  $("document").ready(function(){
     console.log($('h1').text());

     $("h1").prepend("<h2>Dafi Froi</h2>");
    
     $(".google img").hover(function(){
      $(this).attr({src:"https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})
     },function(){
      $(this).attr({src:"http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"})
     }
     )

  });


  