var level = null;
var patternArray = [];

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
    $("#next").prop("disabled", true).prop("innerText", "Round"+level);
    setPattern()//creates an array of numbers according to the players level
    displayPattern()//highlights the numbers in the playfield according to the pattern set
    //testPattern(patternArray)//validates that each click follows the pattern and continues the game if pattern is matched or ends the game if pattern is not matched


    

})


function setPattern(){
    //creates an array of numbers according to the players level
    //returns patternArray variable
    //console.log(level)
    patternArray = [];
    for (var i = 1; i < level+1; i++){
        let patternInstance = random(9)
        //console.log(patternInstance)
        patternArray.push(patternInstance)
        console.log("Array Set " + patternArray)
    }
};

function displayPattern(){
    //highlights the numbers in the playfield according to the pattern set

    for (var i = 1; i < level+1; i++){
        let mem1 = patternArray[i-1]
        console.log(mem1) 
        $("#btn"+mem1).removeClass("btn-lg btn-outline-primary")
        $("#btn"+mem1).addClass("btn-lg btn-primary")
        setTimeout(() => {  $("#btn"+mem1).removeClass("btn-lg btn-primary");
        $("#btn"+mem1).addClass("btn-lg btn-outline-primary")}, 1000);
    }


};    

function testPattern(){
    //validates that each click follows the pattern and continues the game if pattern is matched or ends the game if pattern is not matched
    $("[id^=btn]").unbind().click(function(){
        
        if ($(this).attr("id")=="btn"+mem1){
            console.log("Winner Winner Chicken Dinner");
            level++;
            setTimeout(() => {$("#next").trigger("click")}, 1000);
        } else {
            console.log("You are and always will be a LOSER!");
            level = 0;
        };
        console.log($(this).attr("id"))

    });

};

function startGame(username, location){

    

}

function random(number){
    return Math.floor(Math.random()*number) + 1;
}
