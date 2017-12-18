

var healthPoints, attackPower, counterAttackPower = 0;
var s1, s2, s3, f1, f2, f3, f4, user, enemy, fighters;

var fight_status = "You attacked " + enemy + " for " + attackPower + " damage, and " + enemy + " attacked you back for " + counterAttackPower + " damage.";
var won_message = "You have defeated " + enemy + " you can choose to fight another enemy";
var loss_message = "You have been defeated. Game is over until we battle again.";

var counterAttackPower = Math.floor(Math.random() * 10); // let enemy counterattack === random number
var attackPower = Math.floor(Math.log(6, 2)); // attack power set to user random base power 6
var attackFunction, resetGame;

var characters = {

    f1: {
        name: "Admiral Gial Ackbar",
        attackPower: 90,
        counterAttackPower: 65,
        healthPoints: 150
    },

    f2: {
        name: "Ona Nobis",
        attackPower: 75,
        counterAttackPower: 65,
        healthPoints: 100 
    },

    f3: {
        name: "Moff Tiaan Jerjerrod",
        attackPower: 45,
        counterAttackPower: 55,
        healthPoints: 115
    },

    f4: {
        name: "Poe Dameron",
        attackPower: 65,
        counterAttackPower: 30,
        healthPoints: 135
    }
};


  var characterData = function() {

    for (var keys in characters) {
        if (characters.hasOwnProperty(keys)) {
             keys += characters[keys]
             return keys;
        }
          $("figcapture:id").html(keys);
    }

    characterData();

// Run Javascript when the HTML has finished loading
$(document).ready(function() {


    var user = $(this);
    var enemy = $(this);

    $("#characters").one("click", "figure", function() {
        var user = $(this).css("border", "3px solid green")
        $("#your-character").append(user)
        var rest = $("#characters>div")
        $("#enemies-available-to-attack").append(rest).css("border", "3px solid red");
    });

    $("#enemies-available-to-attack").one("click", "figure", function() {
        var enemy = $(this).css("border", "3px solid black");
        $("#defender-area").append(enemy)
    });

  // ----------------------------------------------------------------
  // Create functions to enable actions between objects.
  $("#attack-button").on("click", function() {

        let user = $("#your-character", "figure"); // let user === figure in yourchar div 
        let enemy = $("#defender-area", "figure"); // let enemy === figure in defender div  

        attackPower++; // === user damages enemy
        $("p:data-id", user).html(user.attackPower); // display innerHTML p:id user attack power
    
        counterAttackPower--; // enemy damages user
        $("p:data-id").html(enemy.counterAttackPower); // display innerHTML p:id enemy attack power

        healthPoints = user.attackPower - enemy.counterAttackPower; // healthpoints === attack minus counterAttack
        $("figcapture:id").html(user.healthPoints); // display healthpoints innerHTML figcaption:id user
        $("figcapture:id").html(enemy.healthPoints); // display healthpoints innerHTML figcaption:id enemy
        $("#score-status").html(fight_status); // displays damage 


    if (enemy.healthPoints === 0) { // you win if enemy points are zero
        $("#defender-area", "figure").remove(); // remove img from div
        $("#score-status").html(won_message); // display won message

        $("#enemies-available-to-attack").on("click", "figure", function() {
            let enemy = $(this) // move img to new div onclick
            enemy.append("#defender-area");
        })


    if (user.healthPoints === 0) { // you lose if your points are zero
        $("#your-character", "figure").remove(); // remove your img from div
        $("#score-status").html(loss_message); // display loss message
        setInterval(resetGame(), 10000); // setInterval to 5 seconds then resetGame function       
        };
    };
});


$("#reset-button").on("click", function() {
// resetGame function onclick innerHTML set attributes to "";
    document.querySelector("#score-status", "p:data-id", "figcaption:id").innerHTML = "";
    window.location.reload();
    });

});

};

