var menuHeight = $("#sidebar").outerHeight();
var startPos = window.parent.screen.height;
$(window).load(function(){
    $(window).scroll(function(){
        var currentPos = $(this).scrollTop();
        if (currentPos < window.parent.screen.height){  
            $("#sidebar").css("top", "-" + menuHeight + "px");
            $("#sidebar").css("opacity", 0.0)
        }else{
            $("#sidebar").css("opacity", 1.0);
            $("#sidebar").css("top", 0 + "px");
        }
  startPos = currentPos;    
});
})

(window.onload = function() {
    for(var i=1; i<48; i++){
            $("#digital").append('<img src="images/photography/' + i + '.jpg" class="img">' );
    }
    for(var j=1; j<20; j++){
        $("#film").append('<img src="images/photography/film' + j + '.jpg" class="img">');
    } 
})();

