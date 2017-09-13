// VARIABLES_____________________________________________________________________

    var attack, f1, f2, f3, f4, s1, s2, s3, user, enemy, enemy_hp, user_hp;
    var s1 = "You attacked " + user + " for " + user_hp + " damage, and " + enemy + " attacked you back for " + enemy_hp + " damage.";
    var s2 = "You have defeated " + enemy + " you can choose to fight another enemy";
    var s3 = "You have been defeated. Game is over until we battle again.";
    
  // JQUERY API DOCS: https://api.jquery.com/image-selector/   OR  use  DOM querySelectorAll()

 $(document).ready(function(){

    var f1 = {
        name: "Admiral Gial Ackbar";
        var attack = function() {
        attackPower = 65,
        counterAttackPower = 75,
        healthPoints = 0,
        .css(background:"white", border:"10px black solid")
        .text( "Health Points: " + f1.healthPoints)
      }
    };
    f1.attack();

    var f2 = {
        name: "Ona Nobis";
        var attack = function() {
        attackPower = 80,
        counterAttackPower = 95,
        healthPoints = 0,
        .css(background:"white", border:"10px black solid")
        .text( "Health Points: " + f2.healthPoints)
      }
    };
    f2.attack();
    
    var f3 = {
        name: "Moff Tiaan Jerjerrod";
        var attack = function() {
        attackPower = 45,
        counterAttackPower = 85,
        healthPoints = 0,
        .css(background:"white", border:"10px black solid")
        .text( "Health Points: " + healthPoints)
      }
    };
    f3.attack();
           
    var fighter4 = {
        name: "Poe Dameron";
        var attack = function() {
        attackPower = 90,
        counterAttackPower = 55,
        healthPoints = 0,
        .css(background:"white", border:"10px black solid")
        .text( "Health Points: " + healthPoints)
      }
    };
    f4.attack();

  // STEP 1 ____________________________________________________________________________
//even listener on $.container .on click filter would element
//$this - default

// $.conter .on click, .char 
// 

      $("#").on("click", function() {
          var user = $(this).parent();
          user.prependTo('#your-character').css( "border", "10px solid green");
        
      $("img").each(function() {
          var remaining_imgs = $(this).children("img"); 
          remaining_imgs.append("#enemies-available-to-attack").css( "border", "10px solid red");
        });
      });
      
      // STEP 2 _______________________________________________________________________

       $("img").on("click", "#enemies-available-to-attack", function() {
          var enemy = $(this).parent();
          enemy.prependTo("#defender-area").css( "border", "10px solid black");

      $("img").each(function() {
          var remaining_imgs = $(this).children("img");
          remaining_imgs.append("#enemies-available-to-attack").css( "border", "10px solid red");

            });
          });
    

      // STEP 3 ______________________________________________________________________________

       $("#attack").click(function() {

        var attack = function attackFunction() {

        var enemy = $("img", "#defender-area"); 
        var user = $("img", "#your-character");
        var healthPoints = Math.floor(Math.random() * 1000) + 1;
        var attackPower = Math.floor(Math.pow(6));
        var counterAttackPower = Math.floor(Math.random() * 10);

        if (this.click()) {
            
            user.attackPower++;
            user_hp = user.attackPower;
            enemy.counterAttackPower--;
            enemy_hp = enemy.counterAttackPower;
            $("#score-status").html(s1);
            user.css().text(this.healthPoints);
            enemy.css().text(this.healthPoints);

        } else { 
            user.attackPower--;
            user_hp = user.attackPower;
            enemy.counterAttackPower++;
            enemy_hp = enemy.counterAttackPower;
            $("#score-status").html(s1);
            user.text(this.healthPoints);
            enemy.text(this.healthPoints);

        }

 /* document.getElementById("test").addEventListener("click", function( event ) {
    // display inside the clicked div
    event.target.textContent = event.detail;
    }, false);
 */

        if (enemy_hp === 0) { // you win
          $("#enemies-available-to-attack").remove(this);
          $("#score-status").html(s2);

        }
        else if (user_hp === 0) { // you lose
          $("#your-character").remove(this);
          $("#score-status").html(s3);
        }
      }
    }
  };
