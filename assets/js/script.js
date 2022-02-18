$("#guest").click(function(){

    let level = 0
    $("#next").prop("disabled", false).prop("innerText", "Start Round");
    //startGame("guest","none");

})

$("#user").click(function(){

    let level = 0
    $("#next").prop("disabled", false).prop("innerText", "Start Round");
    //startGame("John Doe","USA");
    
})

$("#next").click(function(){

    let mem1 = random(9)
    
    setPattern(level)//creates an array of numbers according to the players level
    displayPattern(patternArray)//highlights the numbers in the playfield according to the pattern set
    testPattern(patternArray)//validates that each click follows the pattern and continues the game if pattern is matched or ends the game if pattern is not matched


    $("[id^=btn]").unbind().click(function(){
        
        if ($(this).attr("id")=="btn"+mem1){
            console.log("Winner Winner Chicken Dinner");
            setTimeout(() => {$("#next").trigger("click")}, 1000);
        } else {
            console.log("You are and always will be a LOSER!");
        };
        console.log($(this).attr("id"))

    });

})


$("#btn1").click(function(){
    
})
$("#btn2").click(function(){
    
})
$("#btn3").click(function(){
    
})
$("#btn4").click(function(){
    
})
$("#btn5").click(function(){
    
})
$("#btn6").click(function(){
    
})
$("#btn7").click(function(){
    
})
$("#btn8").click(function(){
    
})
$("#btn9").click(function(){
    
})

function displayPattern(level){
    //for each loop that runs as many times as the level param
    array.forEach(element => {
        
    });
    $("#btn"+mem1).removeClass("btn-lg btn-outline-primary")
    $("#btn"+mem1).addClass("btn-lg btn-primary")
    setTimeout(() => {  $("#btn"+mem1).removeClass("btn-lg btn-primary");
    $("#btn"+mem1).addClass("btn-lg btn-outline-primary")}, 2000);

}
function startGame(username, location){

    

}

function random(number){
    return Math.floor(Math.random()*number) + 1;
}
