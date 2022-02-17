$("#guest").click(function(){

    console.log("guest button was clicked")
    startGame("guest","none");

})

$("#user").click(function(){

    console.log("user button was clicked")
    startGame("John Doe","USA");
    
})

$("#btnNext").click(function(){

    let mem1 = random(9)
    

    $("#btn"+mem1).removeClass("btn-lg btn-outline-primary")
    $("#btn"+mem1).addClass("btn-lg btn-primary")
    setTimeout(()$("#btn"+mem1).removeClass("btn-lg btn-outline-primary"),2000)
    
})

$("#btn1").click(function(){
    console.log("button 1 was clicked")
})
$("#btn2").click(function(){
    console.log("button 2 was clicked")
})
$("#btn3").click(function(){
    console.log("button 3 was clicked")
})
$("#btn4").click(function(){
    console.log("button 4 was clicked")
})
$("#btn5").click(function(){
    console.log("button 5 was clicked")
})
$("#btn6").click(function(){
    console.log("button 6 was clicked")
})
$("#btn7").click(function(){
    console.log("button 7 was clicked")
})
$("#btn8").click(function(){
    console.log("button 8 was clicked")
})
$("#btn9").click(function(){
    console.log("button 9 was clicked")
})
function startGame(username, location){

    console.log(username + " is from " + location);

}

function random(number){
    return Math.floor(Math.random()*number) + 1;
}