var healthPoints, attackPower, counterAttackPower = 0;
var s1, s2, s3, user, enemy, fighters;
var fight_status = "You attacked " + enemy + " for " + attackPower + " damage, and " + enemy + " attacked you back for " + counterAttackPower + " damage.";
var won_message = "You have defeated " + enemy + " you can choose to fight another enemy";
var loss_message = "You have been defeated. Game is over until we battle again.";

$(document).ready(function() {

// fighters = [

  var f1 = {
    name: "Admiral Gial Ackbar",
    // var attack: function() {
    attackPower: 90,
    counterAttackPower: 65,
    // healthPoints: 0,
    // .css(background:"white", border:"10px black solid")
    // .text( "Health Points: " + f1.healthPoints)
    };

  var f2 = {
    name: "Ona Nobis",
    // var attack function() {
    attackPower: 75,
    counterAttackPower: 65,
    // healthPoints: 0,
    //.css(background:"white", border:"10px black solid")
    // .text( "Health Points: " + f2.healthPoints)
    };

  var f3 = {
    name: "Moff Tiaan Jerjerrod",
    // var attack = function() {
    attackPower: 45,
    counterAttackPower: 55,
    // healthPoints: 0,
    // .css(background:"white", border:"10px black solid")
    // .text( "Health Points: " + healthPoints)
    };

  var f4 = {
    name: "Poe Dameron",
    // var attack = function() {
    attackPower: 65,
    counterAttackPower: 30,
    // healthPoints: 0,
    // .css(background:"white", border:"10px black solid")
    // .text( "Health Points: " + healthPoints)
    };
// ];

    $("#characters").one("click", "figure", function() {
        let user = $(this)
        $(this).append("#your-character");
        $("#characters>.char").append("#enemies-available-to-attack");
    });

    $("#enemies-available-to-attack").on("click", "figure", function() {
        let enemy = $(this)
        $(this).append("#defender-area");

    });

    $("#your-character", "img").css("border", "10px solid green");
    $("enemies-available-to-attack", "img").css("border", "10px solid red");
    $("#defender-area", "img").css("border", "10px solid black");


function attackFunction() {

    let user = $("#your-character", "figure"); // let user === figure in yourchar div 
    let enemy = $("#defender-area", "figure"); // let enemy === figure in defender div
    healthPoints = attackPower - counterAttackPower; // healthpoints for all are attack minus counter

    user.attackPower = Math.floor(Math.pow(6)); // attack power set to user random base power 6
    user.attackPower++; // === user damages enemy

    $("p:data-id", user).html(user.attackPower); // display innerHTML p:id user attack power
    $("figcapture:id", user).html(user.healthPoints);  // display healthpoints innerHTML figcaption:id user
  
    enemy.counterAttackPower = Math.floor(Math.random() * 10); // let enemy counterattack === random number
    enemy.counterAttackPower--; // enemy damages user

    $("p:data-id").html(enemy.counterAttackPower);     // display innerHTML p:id enemy attack power
    $("figcapture:id").html(enemy.healthPoints);  // display healthpoints innerHTML figcaption:id enemy

    $("#score-status").html(fight_status); // displays damage 
  }
  
    if ($("#healthPoints", enemy) === 0) { // you win if enemy points are zero
      $("#defender-area", "figure").remove();  // remove img from div
      $("#score-status").html(won_message);  // display won message
     
      $("#enemies-available-to-attack").on("click", "figure", function() {
        let enemy = $(this)  // move img to new div onclick
        $(this).append("#defender-area");
    });

    } else $("#healthPoints", user) === 0 {  // you lose if your points are zero
      $("#your-character", "figure").remove(); // remove your img from div
      $("#score-status").html(loss_message); // display loss message
      setInterval("resetGame()", 10000);  // setInterval to 5 seconds then resetGame function
    }

    function resetGame() { // resetGame function onclick innerHTML set attributes to "";
        document.querySelector("#score-status", "p:data-id", "score").innerHTML = "";
        window.location.reload();
    }

};
