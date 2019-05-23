$( function() {
    clicked = false;
    $( "button" ).on( "click", function( event ) {
      var target = $( event.target ),
        progressbar = $( ".progress-bar" ),
        progressbarValue = progressbar.find( ".progress-bar" );
        
        console.log(progressbar);

       if ( target.is( "#colorButton" ) ) {
           console.log('here');
        
           progressbar.css({"background-color": '#' + Math.floor( Math.random() * 16777215 ).toString( 16 )});

        console.log( progressbar.css);
      } else if ( target.is( "#falseButton" ) ) {
          if(!clicked){
              progressbar.addClass("progress-bar-striped");
              progressbar.addClass("progress-bar-animated");
            clicked = true;
          }
          else{
              console.log("in else");
            progressbar.removeClass("progress-bar-striped");
            progressbar.removeClass("progress-bar-animated");
            clicked = false;
          }
      }
    });
  } );