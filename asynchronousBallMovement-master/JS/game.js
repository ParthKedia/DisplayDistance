class Game{
    constructor(){}


getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();        
    })

}



update(willprovidestatelater){
 database.ref('/').update({
     gameState: willprovidestatelater
 });
}


start(){
    if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
}

play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 200)
    Player.playerInfo();

    if(allPlayers !== undefined){
      var playerY = 130;

      for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        playerY+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,playerY)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}