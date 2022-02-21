//global variable setting for use across functions
var level = 1;
var patternArray = [];
var numberOfClicks = 0;
var prevPatternInstance = null;
var mmUsername;
var winnerLoserMessage;
//var userLocation = null;
//localStorage.clear() //clear local variables for debug purposes
//console.log(localStorage.getItem("localMMUsername"))
//console.log(localStorage.getItem("mmHighScore1"))
//console.log(Number(localStorage.getItem("mmHighScore1"))+10)
mmUsername = localStorage.getItem("localMMUsername")=="" ? "guest" : localStorage.getItem("localMMUsername");
firstTimePlayed();
writeHighScoreTable();

//event listener functions 

$("#guest").click(function(){
    
    level = 1
    $("#next").prop("disabled", false).prop("innerText", "Start Round");
    $("#mmUsername").prop("value","Guest");
    //$("#userLocation").prop("value","None");
    mmUsername = "guest";
    //userLocation = "none";
    $("#startUserGame").prop("disabled",true).prop("innerText","Good Luck "+mmUsername);
    //startGame("guest","none");

})

$("#user").click(function(){

    level = 1;
    $("#startUserGame").prop("disabled",false).prop("innerText","Click After Entering Username");
    $("#next").prop("disabled",true);
    $("#mmUsername").prop("value","Enter Your Name");
    //$("#userLocation").prop("value","Enter Your Country");
    enterUnameCountry();
    
    //startGame("John Doe","USA");
    
})

$("#next").click(function(){

    //let mem1 = random(9)
    $("#next").prop("disabled", true).prop("innerText", "Round "+level);
    setPattern(); //creates an array of numbers according to the players level
    displayPattern(); //highlights the numbers in the playfield according to the pattern set
    testPattern(); //validates that each click follows the pattern and continues the game if pattern is matched or ends the game if pattern is not matched
    writeHighScoreTable(); //Writes message to table header and rewrites table with any new scores

})

$("#startUserGame").click(function(){
    if ($("#mmUsername").prop("value")=="Enter Your Name"){
        $("#mmUsername").prop("value","Please Enter a Name");
        $("#startUserGame").trigger("click");
    } else if ($("#mmUsername").prop("value")=="Please Enter a Name") {
        $("#mmUsername").prop("value","Enter Your Name");
        $("#startUserGame").trigger("click");
    } else {
        mmUsername = $("#mmUsername").prop("value");
        $("#mmUsername").prop("disabled",true).removeClass("superHighlight");
        $("#startUserGame").prop("disabled",true).prop("innerText","Good Luck "+mmUsername);
        localStorage.setItem("localMMUsername", mmUsername);
        $("#next").prop("disabled", false).prop("innerText", "Start Round");
    //    $("#userLocation").prop("disabled",false);
    //    $("startUserGame").prop("innerText","Click After Entering Country")
    }
    //if ($("#userLocation").prop("value")=="Enter Your Country"){
    //    $("#userLocation").prop("value","Please Enter a Country");
    //    $("startUserGame").trigger("click");
   // } else if ($("#userLocation").prop("value")=="Please Enter a Country"){
    //    $("#userLocation").prop("value","Enter Your Country");
    //    $("startUserGame").trigger("click");
    //} else {
    //    userLocation = $("#userLocation").prop("value");
    //    $("#userLocation").prop("disabled",true).removeClass("superHighlight");
    //    $("#startUserGame").prop("disabled",true).prop("innerText","Good Luck "+mmUsername);
    //    $("#next").prop("disabled", false).prop("innerText", "Start Round");
    //}  
})

//game running functions

function enterUnameCountry(){
    $("#mmUsername").prop("disabled",false).addClass("superHighlight");
    //$("#userLocation").addClass("superHighlight");
}

function setPattern(){
    //creates an array of numbers according to the players level
    //fills patternArray variable
    //checks if previous item is same as last and recalulates
    //console.log(level)
    patternArray = [];
    for (var i = 1; i < level+1; i++){
        let patternInstance = random(9)
        if (patternInstance==prevPatternInstance){
            switch(patternInstance){
                case 1:
                    patternInstance = patternInstance+random(8);
                break;
                case 9:
                    patternInstance = patternInstance-random(8);
                break;
                default:
                    patternInstance = patternInstance-1;
            }
        }
        patternArray.push(patternInstance)
        prevPatternInstance = patternInstance
        console.log("Array Set " + patternArray)
    }
};

function displayPattern(){
    //highlights the numbers in the playfield according to the pattern set

    for (var i = 1; i < level+1; i++){
        
        
        displayPatternWithDelay(i)

    }


};    
function displayPatternWithDelay(i){
    let mem1 = patternArray[i-1]
    //console.log(mem1)
    setTimeout(() => {$("#btn"+mem1).addClass("highlightButton") ;}, 400 * i)
    setTimeout(() => { $("#btn"+mem1).removeClass("highlightButton");}, 600 * i);
}
function buttonPress(pressedButton){
    $("#btn"+pressedButton).addClass("buttonPressed")
    //setTimeout(() => {$("#btn"+pressedButton).addClass("buttonPressed") ;}, 400)
    setTimeout(() => { $("#btn"+pressedButton).removeClass("buttonPressed");}, 300);
}
function testPattern(){
    //validates that each click follows the pattern and continues the game if pattern is matched or ends the game if pattern is not matched
    
        $("[id^=btn]").unbind().click(function(){
            let pressedButton = $(this).prop("id").charAt(3)
            buttonPress(pressedButton)
            numberOfClicks++
            //console.log(numberOfClicks)
            mem1 = patternArray[numberOfClicks-1]
            if ($(this).attr("id")=="btn"+mem1){
                console.log("Winner Winner Chicken Dinner");
                if (numberOfClicks==patternArray.length){
                    level++;
                    numberOfClicks = 0;
                        setTimeout(() => {$("#next").trigger("click")}, 1000);
                } else {
                        setTimeout(() =>{testPattern()}, 1000);
                    
                }

            } else {
                console.log("You are and always will be a LOSER!");
                checkHighScores();                        
                level = 1;
                numberOfClicks = 0;
                    $("#next").prop("disabled",false).prop("innerText","You Lost! Start Round Again?");
                    return;
            };
            //console.log($(this).attr("id"))
        });

};

function checkHighScores(){
    if (level>=Number(localStorage.getItem("mmHighScore1"))){
        localStorage.setItem("mmHighScore5",localStorage.getItem("mmHighScore4"));
        localStorage.setItem("mmHighScore4",localStorage.getItem("mmHighScore3"));
        localStorage.setItem("mmHighScore3",localStorage.getItem("mmHighScore2"));
        localStorage.setItem("mmHighScore2",localStorage.getItem("mmHighScore1"));
        localStorage.setItem("mmHighScore1",level);
        winnerLoserMessage = "You beat your top score with a level of "+level+"!";

    } else if (level<Number(localStorage.getItem("mmHighScore1"))&&level>Number(localStorage.getItem("mmHighScore2"))){
        localStorage.setItem("mmHighScore5",localStorage.getItem("mmHighScore4"));
        localStorage.setItem("mmHighScore4",localStorage.getItem("mmHighScore3"));
        localStorage.setItem("mmHighScore3",localStorage.getItem("mmHighScore2"));
        localStorage.setItem("mmHighScore2",level);
        winnerLoserMessage = "You beat your Number 2 score with a level of "+level+"!";
    } else if (level<Number(localStorage.getItem("mmHighScore2"))&&level>Number(localStorage.getItem("mmHighScore3"))){
        localStorage.setItem("mmHighScore5",localStorage.getItem("mmHighScore4"));
        localStorage.setItem("mmHighScore4",localStorage.getItem("mmHighScore3"));
        localStorage.setItem("mmHighScore3",level);
        winnerLoserMessage = "You beat your Number 3 score with a level of "+level+"!";
    } else if (level<Number(localStorage.getItem("mmHighScore3"))&&level>Number(localStorage.getItem("mmHighScore4"))){
        localStorage.setItem("mmHighScore5",localStorage.getItem("mmHighScore4"));
        localStorage.setItem("mmHighScore4",level);
        winnerLoserMessage = "You beat your Number 4 score with a level of "+level+"!";
    } else if (level<Number(localStorage.getItem("mmHighScore4"))&&level>Number(localStorage.getItem("mmHighScore5"))){
        localStorage.setItem("mmHighScore5",level);
        winnerLoserMessage = "You beat your Number 5 score with a level of "+level+"!";
    } else {
        winnerLoserMessage = "You couldn't even beat your Number 5 score!"
    }

}

function writeHighScoreTable(){
    $("#mmHS1").prop("innerText","1. "+mmUsername+"........................................"+localStorage.getItem("mmHighScore1"));
    $("#mmHS2").prop("innerText","2. "+mmUsername+"........................................"+localStorage.getItem("mmHighScore2"));
    $("#mmHS3").prop("innerText","3. "+mmUsername+"........................................"+localStorage.getItem("mmHighScore3"));
    $("#mmHS4").prop("innerText","4. "+mmUsername+"........................................"+localStorage.getItem("mmHighScore4"));
    $("#mmHS5").prop("innerText","5. "+mmUsername+"........................................"+localStorage.getItem("mmHighScore5"));
    $("#winnerLoserMessage").prop("innerText",winnerLoserMessage)
}
function random(number){
    return Math.floor(Math.random()*number) + 1;
};
function firstTimePlayed(){
    if (localStorage.getItem("localMMUserName")==null){
        localStorage.setItem("localMMUserName","guest");
        mmUsername="guest"
        localStorage.setItem("mmHighScore1",0);
        localStorage.setItem("mmHighScore2",0);
        localStorage.setItem("mmHighScore3",0);
        localStorage.setItem("mmHighScore4",0);
        localStorage.setItem("mmHighScore5",0);
        
    }


}
