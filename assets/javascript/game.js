var characters = {

    fighter_1: {
        name: "Admiral Gial Ackbar",
        attackPower: 90,
        counterAttackPower: 65,
        healthPoints: 150
    },

    fighter_2: {
        name: "Ona Nobis",
        attackPower: 75,
        counterAttackPower: 65,
        healthPoints: 100 
    },

    fighter_3: {
        name: "Moff Tiaan Jerjerrod",
        attackPower: 45,
        counterAttackPower: 55,
        healthPoints: 115
    },

    fighter_4: {
        name: "Poe Dameron",
        attackPower: 65,
        counterAttackPower: 30,
        healthPoints: 135
    }
};

var copyCharacters = JSON.parse(JSON.stringify(characters));
var fighter_1, fighter_2, fighter_3, fighter_4;

var user, enemy, rest; // divs

var healthPoints = 0;
var attackPower;
var counterAttackPower;
var defender = "defender";
var attacker = "attacker";

$(document).ready(function() {

var characterData = function() {  
    var charArray = Object.keys(characters);
    for (var i = 0; i < charArray.length; i++) {
        $("#" + charArray[i] + " > p").html(characters[charArray[i]].healthPoints);
    }
};

characterData();

function gameStart() {

    $("#characters").one("click", "figure", function() {
        console.log("$(this)", $(this));
        user = $(this).css("border", "3px solid green")
        $("#your-character").append(user)
        rest = $("#characters>div")
        $("#enemies-available-to-attack").append(rest).css("border", "3px solid red");
        attacker = $(this).attr("data-id")
    });

    $("#enemies-available-to-attack").on("click", "figure", function() {
        enemy = $(this).css("border", "3px solid black");
        $("#defender-area").append(enemy);
        $("#enemies-available-to-attack").hide();
        defender = $(this).attr("data-id")
    });

  $("#attack-button").click(function() {

    counterAttackPower = Math.floor(Math.random() * 10) + 1; // let enemy counterattack
    attackPower = Math.floor(Math.random() * 10) + 1; // attackpower set 

    console.log("characters[defender]", characters[defender].name)
    console.log("characters[attacker]", characters[attacker].name)

    console.log("attackPower: ", attackPower)
    console.log("counterAttackPower: ", counterAttackPower)

    characters[attacker].attackPower = attackPower;
    characters[defender].counterAttackPower = counterAttackPower;

    console.log("characters[defender].counterAttackPowers ", characters[defender].counterAttackPower)
    console.log("characters[attacker].attackPower ", characters[attacker].attackPower)

    characters[attacker].healthPoints -= characters[attacker].attackPower * characters[defender].counterAttackPower;
    characters[defender].healthPoints -= characters[defender].counterAttackPower * characters[attacker].attackPower;

    var fight_message = "You attacked " + characters[defender].name + " for " + characters[attacker].attackPower + " damage, and " + characters[defender].name + " attacked you back for " + characters[defender].counterAttackPower + " damage.";        
       
        console.log("attack button clicked")

        user = $("#your-character figure"); // let user === figure in yourchar div 
        enemy = $("#defender-area figure"); // let enemy === figure in defender div  

        $("#your-character figcaption p").html(characters[attacker].healthPoints); // display healthpoints innerHTML figcaption:id user
        $("#defender-area figcaption p").html(characters[defender].healthPoints); // display healthpoints innerHTML figcaption:id enemy
        $("#score-status").text(fight_message); // displays damage 
        winLoss();
    });
}

gameStart();

function winLoss() {

    var won_message = "You have defeated " + characters[defender].name + " you can choose to fight another enemy";
    var loss_message = "You have been defeated by " + characters[defender].name + ". Game is over until you have enough strength to battle. You must recharge your energies. Hit restart to play again.";

    console.log("characters[attacker].healthPoints ", characters[attacker].healthPoints);
    console.log("characters[defender].healthPoints ", characters[defender].healthPoints);

    if (characters[attacker].healthPoints > 0 && characters[defender].healthPoints <= 0) { // you win if enemy points are zero
        $("#score-status").html(won_message); // display won message
        $("#defender-area figure").remove(); // remove img from div
        $("#enemies-available-to-attack").show();

        $("#enemies-available-to-attack").on("click", "figure", function() {
            $("#enemies-available-to-attack").append("#defender-area");
            defender = $(this).attr("data-id");
            characters[attacker].healthPoints = copyCharacters[attacker].healthPoints; 
        })
    }  // removing this code works until you fight another enemy and then -- it let your scores go below zero

    else if (characters[defender].healthPoints > 0 && characters[attacker].healthPoints <= 0) { // you lose defender wins
        $("#score-status").html(loss_message); // display loss message
        $("#your-character figure").remove(); // remove your img from div

    }

    else if (characters[defender].healthPoints <= 0 && characters[attacker].healthPoints <= 0) { // you lose if your points are zero
        $("#score-status").html(loss_message); // display loss message
        $("#your-character figure").remove(); // remove your img from div

    }

    else if (characters[defender].healthPoints <= 0 && $("#enemies-available-to-attack").empty()) {
        $("#score-status").html("You've won the Star Wars Episode III Battlefront! This is not the end, you must play again!");
        //setInterval(resetGame(), 10000)
    }

    else {
        $("#score-status").html("Attack!");
    }
};

$("#restart-button").on("click", function() {
    document.querySelector("#score-status", "p:data-id", "figcaption:id").innerHTML = "";
    window.location.reload();
});



}); // end document ready*/
