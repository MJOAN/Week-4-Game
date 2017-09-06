// VARIABLES_____________________________________________________________________
  //_____________________________________________________________________________

    var fighter1 = "Admiral Gial Ackbar";
    var fighter2 = "Ona Nobis"; 
    var fighter3 = "Moff Tiaan Jerjerrod";
    var fighter4 = "Poe Dameron";

    var healthPoints = [10, 11, 12, 4, 2, 5, 20, 18, 8, 2, 3, 4, 6, 8, 34, 3]; 
    var attackPoints = healthPoints[Math.round(Math.random() * 10)];
    var counterAttackPower = healthPoints[Math.round(Math.random() * 10)];

    var fightStatus = {
        s1: ["You attacked " + user + " for " + userScore + " damage, and " + enemy + " attacked you back for " + enemyScore + " damage."]
        s2: ["You have defeated " + enemy + " you can choose to fight another enemy"]
        s3: ["You have been defeated. Game is over until we battle again."] 
    };
    
    // JQUERY API DOCS: https://api.jquery.com/image-selector/   OR  use  DOM querySelectorAll()

    var img_score1 = 
      $( "input:image" )
        .css({ background:"white", border:"1px black solid"
        .text( "Health Points: " + score1 )
    });

    var img_score2 = 
      $( "input:image" )
        .css({ background:"white", border:"1px black solid"
        .text( "Health Points: " + score2 )
    });
    
    var img_score3 = 
      $( "input:image" )
        .css({ background:"white", border:"1px black solid"
        .text( "Health Points: " + score3 )
    });
    
    var img_score4 = 
      $( "input:image" )
        .css({ background:"white", border:"1px black solid"
        .text( "Health Points: " + score4 )
    });

  // STEP 1 ____________________user clicks img stays in your character div rest imgs go to enemies div
      
      $(document).ready(function(){

      $('#your-character').on("click", function() {

          // when clicked var user is your character and prepend to your-character div
          var user = $(this).click(function() {
          user.prependTo('#your-character').css( "border", "10px solid green");

          // remaining imgs get appended to enemies-available-to-attack div
          $('.img-responsive').each(function() {
          var image = $(this).children(".img");
          image.remove();
          $("#enemies-available-to-attack").append().css( "border", "10px solid red");

      // STEP 2 _______________________user clicks img to defender div rest stay in enemies div

        $("#enemies-available-to-attack").on("click", function() {
          
          // when clicked, var enemy gets prepended to defender-area div
          var enemy = $(this).click(function() {
          enemy.prependTo('#defender-area');

          // remaining images stay in enemies-available-to-attack div
          $(".img-responsive").each(function() {
          var image = $(this).children(".img");
          image.remove();
          $("#enemies-available-to-attack").append(img);

          });
        });                               
      });

      // STEP 3 _______________________increment counter randomly each click  
      // STEP 4_______________________win and lose inner HTML 

       $(".attack").on("click", function() {

        var healthPoints = [10, 11, 12, 4, 2, 5, 20, 18, 8, 2, 3, 4, 6, 8, 34, 3]; 
        var attackPower = healthPoints[Math.round(Math.random() * 10)];
        var counterAttackPower = healthPoints[Math.round(Math.random() * 10)];
   
        if (this.click) {
            attackPoints += Math.round(1 / 2);
          }
        enemy.damage(counterAttackPower);
  
        else if (this.click) {
            counterAttackPower == Math.round(1 / 2);
          }
        user.damage(attackPower); 

        document.getElementById("score-status").innerHTML = fightStatus.s1;
      });

        if (user === 0) { // you win
          document.querySelector("score-status").innerHTML = fightStatus.s2;
        }

        else if (userScore === 0) { // you lose
          document.querySelector("score-status").innerHTML = fightStatus.s3;
        }
      }
    });

