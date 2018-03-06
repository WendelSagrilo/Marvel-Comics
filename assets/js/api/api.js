var listCharacters = [];

$(function(){
    var offset = Math.floor(Math.random()* 1441);
    
    //Autorização Marvel
    var publicKey = '4fee3f2986caa0474eb69899f3e2191b';
    var privateKey = '326bd4da6e6369364d552405432734b6a1041fbf';
    var timeStamp = $.now();
    var hash = md5(timeStamp + privateKey + publicKey); 

    $.ajax({

        url: "https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=60&offset="+offset+"&ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash+""

    }).then(function(result){

        var hero = result.data.results; // Filtro do resultado API 
        for(i=0; i< hero.length;i++){ 
            
            //Filtro de Imagens não Disponiveis na API
            if(!(hero[i].thumbnail.path.indexOf("image_not_available") >= 0) || 
                hero[i].thumbnail.path.extension == "gif"){
                    
                    var character = new Character();
                    character.id = hero[i].id;
                    character.name = hero[i].name;
                    character.image = hero[i].thumbnail.path + "/landscape_xlarge.jpg";
                    character.description = hero[i].description;
                    character.comics = hero[i].comics.available;

                    listCharacters.push(character);
            }

            if(listCharacters.length == 20){
                break;
            }  

        }
        createTeam(listCharacters);

    });
    
});


function createTeam(list){
    var element = document.getElementsByClassName("hero"); 
    for(i=0; i< list.length; i++){
        $(element[i]).attr("src", list[i].image);
        $(element[i]).attr("accessKey", i); 
        

    if(i ==19){
        $("#btnStart").prop("disabled", false);
    }
    }
}

