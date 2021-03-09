class Form{
    constructor(){
        this.input = createInput("name"); 
        this.button = createButton("play");
        this.greeting = createElement("h1");
    }

display(){


var title = createElement("h2");
title.html("Project Carz");
title.position(500,160);

    
    this.input.position(450,250);
   
    this.button.position(450,280);


    


    this.button.mousePressed(()=>{ 

        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        
        playerCount +=1 ;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Welcome "+ player.name);
        this.greeting.position(500,300);
    

    });
}

hide(){
    this.input.hide();
    this.button.hide();

    this.greeting.hide();
}

}