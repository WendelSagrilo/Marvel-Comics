document.getElementsByTagName("body")[0].style.cursor = "url('../img/cursorBox.png'), auto";

$(function(){
    //Animação tela Escura
    $("#darkScreen").animate({
        height: "100vh",
    },1000);
    
   positionElement();

   
});

    //Posicionamento dos textos e do botão
function positionElement(){

    var positionX = $("#baloon").offset();
    var topImage = positionX.top + 90;
    var leftImage = positionX.left +150;

    
    var positionY = $("#baloon").offset();
    var top2 = positionY.top + 80;


    var positionZ = $("#baloon").offset();
    var top3 = positionZ.top + 160;
    
    
    setInterval(function(){
    
        $("#btnStart").animate({
            opacity: 1,
        },300);

        $("#textGame").css({
            top: topImage,
            margin: '10px', 
        });
        $("#textGame2").css({
            top: top2,
            margin: '50px',
        });
    
        $("#btnStart").css({
            top: top3,
            margin: '50px',
        });
       
    },1001);
}

//Start Game
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
    });

    setInterval(function(){
        $("#darkScreen, #blackBar,.text-game, #btnStart,#baloon").remove();
    },1001);
    
    selectHero();
});

function selectHero(){
    $("#player1, #player2, #vs").animate({
        opacity: 1,
    },600);

    var character = document.getElementsByClassName('hero');
    console.log(character);

    for(var i = 0; i< character.length; i++){
        character[i].addEventListener("mouseover", function(){
            console.log(this.id);
            this.style.borderBottom = "3px solid black";

        });

        character[i].addEventListener("mouseout", function(){
            this.style.borderBottom = "none";

        });
    }
}
