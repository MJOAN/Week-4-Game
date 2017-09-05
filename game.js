

// . = class  # = id

// VARIABLES_____________________________________________________________________
  //_____________________________________________________________________________

    var user, enemy; 
    var enemyScore = [10, 15, 25, 5, 20];
    var userScore = 0;
    var enemyPoints = enemyScore[Math.floor(Math.random() * enemyScore.length)];  // randomize enemy points per click
    

    
    document.getElementById("text1").innerHTML = userText; 
    document.getElementById("text2").innerHTML = enemyText;

    var fightStatus = {
        u1: ["You attacked " + user + " for " + userScore + " damage."]
    var enemyText = "You attacked " + enemy + " for " + enemyScore + " damage." 




    document.querySelector("#points").innerHTML = html;
    

    // assign text and points to each image 

    var img_score1 = 
      $( "input:image" )
        .css({ background:"white", border:"1px black solid"
        .text( "Score: " + score1 )
    });

    var img_score2 = 
      $( "input:image" )
        .css({ background:"white", border:"1px black solid"
        .text( "Score: " + score2 )
    });
    
    var img_score3 = 
      $( "input:image" )
        .css({ background:"white", border:"1px black solid"
        .text( "Score: " + score3 )
    });
    
    var img_score4 = 
      $( "input:image" )
        .css({ background:"white", border:"1px black solid"
        .text( "Score: " + score4 )
    });


  $(document).ready(function(){
      
      // STEP 1 ____________________user clicks img stays in your character div rest imgs go to enemies div
      $('#your-character').on("click", function() {

          // keep img in your character div
          var user = $(this).click(function() {
          user.prependTo('#your-character').css( "border", "10px solid green");

          // remaining imgs get appended to enemies div
          $('.img').each(function() {
          var image = $(this).children(".img");
          image.remove();
          // $(this).append($('#enemies-available-to-attack > div' ));
          $("#enemies-available-to-attack").append().css( "border", "10px solid red");

      // STEP 2 _______________________user clicks enemies img to defender div rest stay in enemies div

        $("#enemies-available-to-attack").on("click", function() {
          
          var enemy = $(this).click(function() {
          enemy.prependTo('#defender-area');

          $(".img").each(function() {
          var image = $(this).children(".img");
          image.remove();
          $("#enemies-available-to-attack").append(img);

          });
        });                               
      });

      // STEP 3 _______________________start fight attack game and score counters

  
      if ((user === click) || (user === "p") || (user === "s")) {

        if ((user === "r") && (enemy === "s")) {
          wins++;
        } else if ((user === "r") && (enemy === "p")) {
          losses++;
        } else if ((user === "s") && (enemy === "r")) {
          losses++;
        } else if ((user === "s") && (enemy === "p")) {
          wins++;
        } else if ((user === "p") && (enemy === "r")) {
          wins++;
        } else if ((user === "p") && (enemy === "s")) {
          losses++;
        } else if (user === enemy) {
          ties++;
        }

      



      }
    };