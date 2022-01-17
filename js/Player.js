class Player {
  constructor() {   //properties of an object --> the props will be applied for all the objects created from this class
    this.name = null;
    this.index = null;    //p1, p2,...
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;  //a new node called 'players' will be created
      // players/ --> inside the players node, the node player+(1)/(2) will be create
    if (this.index === 1) {   //if you're the 1st player
      this.positionX = width / 2 - 100;   //x positon will be in the left side of the center
    } else {
      this.positionX = width / 2 + 100;   //x positon will be in the right side of the center
    }

    database.ref(playerIndex).set({     //referring to "players/player/name:... , positionX:..., positionY:..."
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }
 

  //gets the number of players
  getCount() {

    //refer to the 'playerCount' node in the database--> database.ref('')
    var playerCountRef = database.ref("playerCount");

  //listen to the changes happening in the database --> changes: the change in playerCount when the player joins
    playerCountRef.on("value", data => { //data --> listened information
      playerCount = data.val();   //.val() -->stores the listened information
    });
  }

  //update the number of players in the database
  updateCount(count) {
    database.ref("/").update({     // '/' means the entire database
      playerCount: count           //updates the node called 'playerCount'
    });
  }

 
//get the players' information and store it in the allPlayers variable
  static getPlayersInfo() {
    //refer to the "players" node in the database
    var playerInfoRef = database.ref("players");

    //listening to the changes happening inside the "players"
    playerInfoRef.on("value", data => {

      //the listened changes are stored inside the allPlayers variable
      allPlayers = data.val();
    });
  }
}
