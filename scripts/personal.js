$(window).on("load", function() {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;

    $(document).mousemove(function(e){
        mouseX = e.pageX - 10;
        mouseY = e.pageY - 10; 
    });

    setInterval(function(){
        xp += ((mouseX - xp)/6);
        yp += ((mouseY - yp)/6);
        $(":root").css("--mouse-x", xp +'px').css("--mouse-y", yp +'px');
    }, 20);
    
    $("#nav2-3").addClass("active-nav");
})

$("nav2 > ul > li > a").on("click", function() {
    $("#nav2-3").removeClass("active-nav");
});