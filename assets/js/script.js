var level = null;
var patternArray = [];
var numberOfClicks = 0;
var prevPatternInstance = null;

$("#fakebutton").click(function(){
    console.log("you clicked test")
})

$("#guest").click(function(){

    level = 1
    $("#next").prop("disabled", false).prop("innerText", "Start Round");
    //startGame("guest","none");

})

$("#user").click(function(){

    level = 1
    $("#next").prop("disabled", false).prop("innerText", "Start Round");
    //startGame("John Doe","USA");
    
})

$("#next").click(function(){

    //let mem1 = random(9)
    $("#next").prop("disabled", true).prop("innerText", "Round "+level);
    setPattern() //creates an array of numbers according to the players level
    displayPattern() //highlights the numbers in the playfield according to the pattern set
    testPattern() //validates that each click follows the pattern and continues the game if pattern is matched or ends the game if pattern is not matched

})


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

function testPattern(){
    //validates that each click follows the pattern and continues the game if pattern is matched or ends the game if pattern is not matched
    
        $("[id^=btn]").unbind().click(function(){
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
                level = 1;
                numberOfClicks = 0;
                    setTimeout(() => {$("#next").trigger("click")}, 1000);
            };
            //console.log($(this).attr("id"))
            });

};

function startGame(username, location){

    

}

function random(number){
    return Math.floor(Math.random()*number) + 1;
};

