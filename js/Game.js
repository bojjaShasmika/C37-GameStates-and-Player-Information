class Game {
  constructor() {}
  
  //to get the gameState value from the database
  getState() {
    //refer to the 'gameState' node in the database--> database.ref('')
    var gameStateRef = database.ref("gameState");

    //listen to the changes happening in the database --> changes: the change in playerCount when the player joins
    gameStateRef.on("value", function(data) {   //data --> listened information
      gameState = data.val();   //.val() -->stores the listened information
    });
  }
 
  //to update the gameState node in the database
  update(state) {     //state -->based on the number of players the dedcided gameState
    database.ref("/").update({    // '/' means the entire database
      gameState: state        //updates the node called 'gameState'
    });
  }

  //what happens in the starting of the game (when the form is filled) --> wait state
  wait(){
    //creating new players --> a new player object is created for the Player class
    playerObject = new Player()

    //creating a new form to each player and displaying the forms to the other players
    formObject = new Form() 

    //display the form to the player --> objectName.fucntionName()
    formObject.display();

    //to create the sprites for the cars
    car1 = createSprite(width/2 - 50, height - 100)
    car1.addImage(car1_img) 
    car1.scale = 0.7;
    
    car2 = createSprite(width/2 + 100, height - 100)
    car2.addImage(car2_img) 
    car2.scale = 0.7;

    cars = [car1, car2];

  }

  handleElements(){   //works when all the players have joined / after the wait state and before the play state
    //hide the form
  formObject.hide()
  
//change the position of the titleImage
formObject.titleImg.position(40, 50)

    //change the style of the titleImage
    formObject.titleImg.class("gameTitleAfterEffect")
  }

  play(){
    this.handleElements();
    Player.getPlayersInfo();
    
    if(allPlayers!== undefined){
      image(track, 0, -height * 5, width, height*6)
      drawSprites();
    }
  }
}
