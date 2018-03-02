$(function(){
    $("#darkScreen").animate({
        height: "100vh",
    },1000);

    var positionX = $("#baloon").offset();
    var topImage = positionX.top + 90;
    var leftImage = positionX.left +150;

    
    
    setInterval(function(){
        $("#btnStart").animate({
            opacity: 1,
        },300);

        $("#textGame").css({
            top: topImage,
            margin: '10px', 
        });
    
        var positionY = $("#baloon").offset();
        var top2 = positionY.top + 80;
        
        $("#textGame2").css({
            top: top2,
            margin: '50px',
        });
    
        var positionZ = $("#baloon").offset();
        var top3 = positionZ.top + 160;
        
        $("#btnStart").css({
            top: top3,
            margin: '50px',
        });
       
    },1001);
});

$("#btnStart").on("click", function(){
    $("#darkScreen").animate({
        height: "0",
    },1000);

    $("#darkScreen, #blackBar,.text-game, #btnStart").css({
        display: "none",
    });

    $("#baloon").css({
        width: 0,
        height: 0,
        zIndex: "-300",
            
        
    })

});