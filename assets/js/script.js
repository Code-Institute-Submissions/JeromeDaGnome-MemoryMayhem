$("guest").click(function(){

    startGame("guest","none");

})

$("user").click(function(){

    startGame("John Doe","USA");
    
})

function startGame(username, location){

    console.log(username + "is from" + location);

}