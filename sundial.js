(function ( $ ) { 
	$.fn.sundial = function() {
	    return this.each(function() {
	      var $box = $(this);
        var now = new Date(); 
        var hours = now.getHours();
        if(hours > 6 && hours < 18){
          var blur = 20;
          var horizontal = 0;
          if(hours < 12){
            blur = blur + (hours - 12);
            horizontal = horizontal - (hours - 12) * 3;
          } else {
            blur = blur + (hours - 12);
            horizontal = horizontal + (hours - 12) * 3;
          }
          console.log($box);
          $box.css('box-shadow', horizontal+'px 0px '+blur+'px 0px rgba(0,0,0,0.75)');
        } else {
          $box.css('box-shadow', 'none');
        }
	  });
	};
}( jQuery ));
