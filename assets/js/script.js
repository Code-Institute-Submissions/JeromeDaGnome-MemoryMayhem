$("#guest").click(function(){

    
    startGame("guest","none");

})

$("#user").click(function(){

    
    startGame("John Doe","USA");
    
})

$("#btnNext").click(function(){

    let mem1 = random(9)
    

    $("#btn"+mem1).removeClass("btn-lg btn-outline-primary")
    $("#btn"+mem1).addClass("btn-lg btn-primary")
    setTimeout(() => {  $("#btn"+mem1).removeClass("btn-lg btn-primary");
    $("#btn"+mem1).addClass("btn-lg btn-outline-primary")}, 2000);


    userattempt("btn"+mem1)

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
function startGame(username, location){

    

}

function random(number){
    return Math.floor(Math.random()*number) + 1;
}

function userattempt(mem1){
    
    $(":button").click(function(){
        
        console.log(mem1)
        console.log($(this).attr("id"))

    });
}