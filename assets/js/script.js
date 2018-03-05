var teamA = [];
var teamB = [];
var resultA = 0;
var resultB = 0;
var nameA = [];
var nameB = [];

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
    for(var i = 0; i< character.length; i++){
        character[i].addEventListener("mouseover", function(){
            
            this.style.borderBottom = "4px solid black";

            if(this.accessKey < 10){
                document.getElementById("imgBig1").setAttribute("src", this.src);
                $("#name1").html(listCharacters[this.accessKey].name);
            } else {
                document.getElementById("imgBig2").setAttribute("src", this.src);
                $("#name2").html(listCharacters[this.accessKey].name);
            }

        });
        character[i].addEventListener("mouseout", function(){
            this.style.borderBottom = "none";
            $("#imgBig1").attr("src", "assets/img/spiderBig.jpg");
            $("#imgBig2").attr("src", "assets/img/venomBig.png");

        });

        $(character[i]).on("click", function(){
            
            teamBattle(this);
        });
    }
}

function teamBattle(element){
    var choice = document.getElementsByClassName("character"); 
    var keyElementA = teamA.length;
    var keyElementB = teamB.length;
    var source = $(element).attr("src");

    $(choice[keyElementA]).attr("accessKey", element.accessKey);


    //Team A
    if(element.accessKey < 10){
        
        if(teamA.length < 3){

        $(choice[keyElementA]).attr("src", source);
        teamA.push(listCharacters[element.accessKey]);
        }
    } 
    //TeamB
    else { 
        $(choice[keyElementB+3]).attr("src", source);
        teamB.push(listCharacters[element.accessKey]);

    }

}


//Iniciar Confronto
$("#result").on("click", function(){
    var nameVictory = document.getElementsByClassName("name-win");
    var imgVictory = document.getElementsByClassName("img-team");
    var characterBattle = document.getElementsByClassName("character");

    var qnt = 0; 

    
    if(teamA.length == 0 || teamB.length == 0){
        alert("escolha ao menos 1 personagem em cada time");
    }else{

        $("body").css({
            height: "100%"
        });

        for(i=0;i<teamA.length;i++){
            qnt = teamA[i].comics;
            resultA = resultA + qnt;
            nameA.push(teamA[i]);

            $(imgVictory[i]).attr("src", nameA[i].image);
            $(nameVictory[i]).html(nameA[i].name+ "&nbsp-&nbsp"+ nameA[i].comics + "aparições");
            //  + '</br> '+ nameA[i].description);
            

        }
        
        for(i=0;i<teamB.length;i++){
            qnt = teamB[i].comics;
            resultB = resultB + qnt;
            nameB.push(teamB[i]);
            
            $(imgVictory[i+3]).attr("src", nameB[i].image);
            $(nameVictory[i+3]).html(nameB[i].name+ "&nbsp-&nbsp"+ nameB[i].comics + " Comics");
            //  + " &nbsp aparições" + '</br> '+ nameB[i].description);
            
        }

        
        //Team A ganha

        if(resultA > resultB){
            setInterval(function(){    
                $(".box-select").fadeOut("300");
                $("#victory").css({
                    display: "block",
                });
                $("#teamVictory").html("TEAM A WIN!! "+"<br>"+ resultA + " X " + resultB);
                $("#teamVictory2").html("TEAM B LOSE!! "+"<br>"+ resultB + " X " + resultA);

                $("#teamVictory2").css({
                    color: "red",
                });
            },301);

        //Team B ganha
            
        }else{ if(resultB > resultA){
                $(".box-select").fadeOut("300");
                setInterval(function(){
                    $("#victory").css({
                        display: "block",
                    });
                    $("#teamVictory").html("TEAM A LOSE!! "+"<br>"+ resultA + " X " + resultB);
                    $("#teamVictory2").html("TEAM B WIN!! "+"<br>"+ resultB + " X " + resultA);


                    $("#teamVictory").css({
                        color: "red",
                    });
                    
                },301);

                }else if(resultA == resultB){
                    $(".box-select").fadeOut("300");
                    setInterval(function(){
                        $("#victory").css({
                            display: "block",
                        });
                        $("#teamVictory").html("EMPATE "+ resultB + " X " + resultA);
                        $("#teamVictory2").html("EMPATE "+ resultA + " X " + resultB);

                        $("#teamVictory, #teamVictory2").css({
                            color: "yellow",
                        });
                    
                    },301);
            }
        }

    }
    
});

