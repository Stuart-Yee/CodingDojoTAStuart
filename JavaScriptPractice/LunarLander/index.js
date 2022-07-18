console.log("begin landing!")

// Gravity and animation
const GRAVITY = .1;
let frames = 0;
const frameRate = 5;
const spriteSize = [25, 20] // width, height

//setting background image size:
const imgHeight = 150;
const imgWidth = 2*imgHeight; 

const startSettings = {
    "position": { x: 150, y: 15 },
    "fuel": 50,
    "velocity": 0,
    "lateral": 0
}

const startSettingsM = {
    "position": { x: 0, y: 15 },
    "fuel": 50,
    "velocity": 0,
    "lateral": .4
}

//crash conditions
const maxVel = .4
const maxLat = .2
const minLat =-.2

// Control consoles
const readout = document.getElementById("key");
const guage = document.getElementById("fuel");
const speedometer = document.getElementById("velocity");
const restart = document.getElementById("restart");

// Initiating a Lander
lander = new Lander(startSettings);
guage.innerHTML = lander.fuel;
speedometer.innerHTML = lander.velocity;

//Landing pad
let startX = getRandomStart();
console.log("start x", startX)
landingPad = new LandingPad(startX, canvas.height-3, spriteSize[0]*1.5);


// Setting up the Canvas
canvas = document.getElementById("canvas");
canvas.style.height = "800px";
canvas.style.width = "1200px";
c = canvas.getContext('2d');
const img = document.getElementById("stars");

window.onload = function () {

    c.drawImage(img, 0, 0, imgWidth, imgHeight);   
}

//Major Tom to GROUND control...
c.fillStyle = 'gray';
c.fillRect(0, canvas.height-1, 5, canvas.width);

//Show message on screens
function showMessage(message, color){
    const box = document.getElementById("gameMsg");
    box.style.display = "block";
    box.style.color = color;
    box.innerHTML = message;

}

//Refresh instrumentation information with animation
function refreshGuages(alarm=false){
    if (lander.crashed){
        speedometer.innerHTML = 0;
    } else {
        speedometer.innerHTML = (lander.velocity*10).toFixed(2);
    }
    if (alarm) {
        guage.className = "alert"
        guage.innerHTML = "FUEL EXPENDED!"
    } else {
        guage.classList.remove('alert')
        guage.innerHTML = lander.fuel;
    }
}

//generate random starting number for launch pad
function getRandomStart(){
    x = Math.floor(Math.random()*100);
    mod = Math.floor(Math.random()*100);
    console.log("mod", mod);
    let retvalue = x;
    if (mod>66) {
        retvalue += 200;
    } else if (mod > 33) {
        retvalue += 100;
    }
    if (retvalue > 250) {
        console.log(retvalue, "too high! Trying again...")
        return getRandomStart();
    } else {
        return retvalue;
    }
}

window.addEventListener(
    "keydown", e => {
        readout.innerHTML = e.key;
        lander.thrusters(e);
        let alarm = lander.burn(e);
        if (e.key === "Escape"){
            lander.restart(startSettings);
            start();
        }
        // refreshGuages(alarm=alarm);
        if (e.key === "x"){
            lander.crashed = true;
            console.log("scuttling the ship!")
            showMessage("Self Destruct!", "red");

        } 

    }

);


restart.addEventListener("click", function() {
    console.log("restarting...");
    lander.restart(startSettings);
    document.getElementById("gameMsg").style.display = "none";
    start();

    
});

function animate() {
    c.drawImage(img, 0, 0, imgWidth, imgHeight);
    c.fillStyle = 'gray';
    c.fillRect(0, canvas.height-5, canvas.width, 5); 
    landingPad.draw(c); 
    lander.draw(c, spriteSize);
    frames++;
    if (frames%frameRate === 0){
        lander.velocity += GRAVITY;
        frames = 0;
    }
    if (lander.fuel < 1){
        refreshGuages(alarm=true)
    } else {
        refreshGuages();
    }
    // console.log("lat", (lander.lateral*10).toFixed(2));
    if (lander.y+spriteSize[1] >= canvas.height-2) {
        let alarm = false;
        if(lander.fuel===0){
            alarm = true;
        }
        refreshGuages(alarm=alarm);
        lander.crashed = true;
        // console.log("lander", lander.x, "pad", landingPad.x, landingPad.edge);
        if (lander.velocity > maxVel 
            || minLat > lander.lateral || maxLat < lander.lateral 
            || lander.x < landingPad.x || lander.x + spriteSize[0] > landingPad.edge
            ) {
            
            console.log("Crashed!");
            showMessage("FUCK!", "red");
            if (lander.fuel <= 0) {
                guage.className = "alert"
                guage.innerHTML = "FUEL EXPENDED!"
            }
        } else {
            console.log("Safe landing!");
            showMessage("Safe Landing!", "cyan");
        }
    }
    if (lander.crashed==false){
        window.requestAnimationFrame(animate);
    }
    
}

function start(){
    const msgColor = "deepskyblue";
    showMessage("Prepare to Land!", msgColor);
    setTimeout(()=> {
        showMessage("3", msgColor);
        setTimeout(()=> {
            showMessage("2", msgColor);
            setTimeout(()=>{
                showMessage("1", msgColor);
                setTimeout(()=>{
                    showMessage("", "black");
                    animate()
                }, 1000);

            }, 1000);
        }, 1000);
    
    }, 2000);
}

start();



