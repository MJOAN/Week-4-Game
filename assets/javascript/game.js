// VARIABLES_____________________________________________________________________
  //_____________________________________________________________________________

    var fighter1 = "Admiral Gial Ackbar";
    var fighter2 = "Ona Nobis"; 
    var fighter3 = "Moff Tiaan Jerjerrod";
    var fighter4 = "Poe Dameron";
    var fighter1_hp, fighter2_hp, fighter3_hp, fighter4_hp = 0;
    var s1, s2, s3, user, enemy, enemyScore, userScore;

    var fightStatus = {
        s1: ["You attacked " + user + " for " + userScore + " damage, and " + enemy + " attacked you back for " + enemyScore + " damage."]
        s2: ["You have defeated " + enemy + " you can choose to fight another enemy"]
        s3: ["You have been defeated. Game is over until we battle again."]
    };
    
    // JQUERY API DOCS: https://api.jquery.com/image-selector/   OR  use  DOM querySelectorAll()

    var fighter1 = {
        name: "Admiral Gial Ackbar";
        var attack = function() {
        attackPower = 0;
        counterAttackPower = 0;
        healthPoints = 0;
        .css(background:"white", border:"10px black solid")
        .text( "Health Points: " + healthPoints)
      }
    };
    fighter1.attack();

    name: "Admiral Gial Ackbar";
        var attack = function() {
        attackPower = 0;
        counterAttackPower = 0;
        healthPoints = 0;
        .css(background:"white", border:"10px black solid")
        .text( "Health Points: " + healthPoints)
      }
    };
    fighter1.attack();
    
    name: "Admiral Gial Ackbar";
        var attack = function() {
        attackPower = 0;
        counterAttackPower = 0;
        healthPoints = 0;
        .css(background:"white", border:"10px black solid")
        .text( "Health Points: " + healthPoints)
      }
    };
    fighter1.attack();
    
    name: "Admiral Gial Ackbar";
        var attack = function() {
        attackPower = 0;
        counterAttackPower = 0;
        healthPoints = 0;
        .css(background:"white", border:"10px black solid")
        .text( "Health Points: " + healthPoints)
      }
    };
    fighter1.attack();

  // STEP 1 ____________________user clicks img your character div rest imgs go to enemies div
      
      $(document).ready(function(){

        function moveImage() {

      $("img").click(function() {
          // when clicked var user is your character and prepend to your-character div
          var user = $(this).click(function() {
          user.prependTo('#your-character').css( "border", "10px solid green");


          // remaining imgs get appended to enemies-available-to-attack div
      $("img").each(function() {

          var remaining_imgs = $(this).children("img");  // var image = remaining imgs = remove and append
          remaining_imgs.append("#enemies-available-to-attack").css( "border", "10px solid red");
      });

      // STEP 2 _______________________user clicks img to defender div rest stay in enemies div
       // do i need 2 functions?

      $("img").click(function() {

          // when clicked, var enemy gets prepended to defender-area div
          var enemy = $(this).click(function() {
          enemy.prependTo("#defender-area").css( "border", "10px solid black");;

          // remaining images stay in enemies-available-to-attack div
      $("img").each(function() {

          var remaining_imgs = $(this).children("img");
          remaining_imgs.append("#enemies-available-to-attack");

      });
          });
        });                               
      });

      // STEP 3 _______________________increment counter randomly each click  

       $(".attack").on("click", function() {

        var healthPoints = Math.floor(Math.random() * 1000) + 1;
        var attackPower = healthPoints[Math.round(Math.random() * 10)];
        var counterAttackPower = healthPoints[Math.round(Math.random() * 10)];
        var fightStatus = [];         


        var attack = function attackFunction() {
            if (this.click) {
            
            this.attackPoints += Math.round(1 / 2);
            this.enemy.attack(counterAttackPower);
            this.counterAttackPower -= Math.round(1 / 2);
            this.user.attack(attackPower);   
            $("#score-status").html(fightStatus.s1);

    }
  };
       
 /*       document.getElementById("test").addEventListener("click", function( event ) {
        // display the current click count inside the clicked div
        event.target.textContent = event.detail;
        }, false);
      */

    // STEP 4_______________________win and lose inner HTML 

        if (user === 0) { // you win
          $("#score-status").html(fightStatus.s2);
        }
        else if (userScore === 0) { // you lose
          $("#score-status").html(fightStatus.s3);
        }
      }

  

