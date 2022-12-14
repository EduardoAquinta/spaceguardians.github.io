//import Phaser from "phaser";

export class CreditsScene extends Phaser.Scene {
  constructor() {
    super("CreditsScene");
    this.user = '';
    this.storedHighScore = 0;
  }

  init(data) {
    this.score = data.score;
    this.level = data.level; 
  }

  preload() {
    this.load.image("title", "./assets/SG.png");
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
    head.appendChild(link);
  }

  create() {
    this.add.image(400, 100, "title");
    this.add.text(230, 280, `You scored - ${this.score}`, {
      fontFamily: "'Press Start 2P', serif",
      fontSize: 20,
      color: "#ff0000",
      align: "center",
    });
    this.add.text(190, 330, `You reached Level - ${this.level}`, {
      fontFamily: "'Press Start 2P', serif",
      fontSize: 20,
      color: "#0404fc",
      align: "center",
    }); 
      this.add.text(200, 350, "Press SPACE to restart!", {
      fontFamily: "'Press Start 2P', serif",
      fontSize: 20,
      color: "#ff0000", 
      align: "center",
    });
    this.storedHighScore = window.localStorage.getItem('highscore');

    if (this.score > this.storedHighScore){
      window.localStorage.setItem('highscore', this.score)
      this.storedHighScore = window.localStorage.getItem('highscore');
      this.add.text(200, 380, "New HighScore: " + this.storedHighScore  ,{
        fontFamily: "'Press Start 2P', serif",
        fontSize: 20,
        color: "#ff0000", 
        align: "center",
      })
      } else {
        this.add.text(200, 380, "HighScore: " + this.storedHighScore,{
          fontFamily: "'Press Start 2P', serif",
          fontSize: 20,
          color: "#ff0000", 
          align: "center",
        })
      }  
    this.add.text(180, 580, "Written by The DareDevs", {
      fontFamily: "'Press Start 2P', serif",
      fontSize: 20,
      color: "#ff0000",
      align: "center",
    });


       

    console.log(window.localStorage.getItem('highscore'))

   }
  update() {
    let keySPACE = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    if (keySPACE.isDown) {
      this.scene.start("GameScene");
    }
       if(this.score > this.storedHighScore) {
        window.localStorage.setItem('highScoreTable', this.user)
       }

    
  }
}
