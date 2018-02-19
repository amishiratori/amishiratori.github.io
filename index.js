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

//window.onload = function() {
//    
//    for(var i=1; i<48; i++){
//            $("#digital").append('<img src="images/photography/' + i + '.jpg" class="img">' );
//    }
//    for(var j=1; j<20; j++){
//        $("#film").append('<img src="images/photography/film' + j + '.jpg" class="img">');
//    } 
//
//        $(".img").click(function(){
//            
//            var height = $(window).innerHeight();
//            var img_height = $(this).height();
//            var img_width = $(this).width();
//            
//            var max_height = height*0.8;
//            
//            if (img_height > img_width*0.5){
//                $("#modal-img").css("height", max_height);
//            }else{
//                $("#modal-img").css("width", "40%");
//            }
//            
//
//            var img = $(this).attr('src');
//            console.log(img);
//
//            document.getElementById('modal-img').src = img;
//            
//            $("#modal-contents").fadeIn();
//            
//            $("#modal-contents").click(function(){
//                  $("#modal-contents").fadeOut();
//            });
//
//        });
//
//       
//}