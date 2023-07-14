// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){


    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById("rocket");


    takeoff.addEventListener("click", function(event){
        
        let status = confirm("Confirm that the shuttle is ready for takeoff");

        if(status === true)
        {

            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            height = Number(spaceShuttleHeight.innerHTML);
            height += 10000;
            spaceShuttleHeight.innerHTML = height;
        }
    })



    landing.addEventListener("click",function(event){

        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbort.addEventListener("click", function(event){
        if(window.confirm("Confirm that you want to abort the mission.")){

            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
        else{
            alert("Cancelling Abort");
        }

    });

    up.addEventListener("click", function(){
        rocket.style.top = (parseInt( rocket.style.top) - 10) + "px";
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;

    });
    down.addEventListener("click", function(){
        rocket.style.top = (parseInt( rocket.style.top) + 10) + "px";
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;

    });
    left.addEventListener("click", function(){
        //rocket.style.left = (parseInt( rocket.style.top) - 10) + "px";
        rocket.style.left = (parseInt( rocket.style.left) - 10);

    });
    right.addEventListener("click", function(){
        rocket.style.left = (parseInt( rocket.style.left) + 10) + "px";

    });

}

window.addEventListener("load",init);