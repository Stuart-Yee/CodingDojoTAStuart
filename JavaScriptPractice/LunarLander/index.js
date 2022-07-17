console.log("begin landing!")

// Gravity and animation
const GRAVITY = .1;
let frames = 0;
const frameRate = 5;
const spriteSize = [5, 5]

//setting background image size:
const imgHeight = 150;
const imgWidth = 2*imgHeight; 

const startSettings = {
    "position": { x: 150, y: 30 },
    "fuel": 50,
    "velocity": 0,
    "lateral": 0
}

// Control consoles
const readout = document.getElementById("key");
const guage = document.getElementById("fuel");
const speedometer = document.getElementById("velocity");
const restart = document.getElementById("restart");

// Initiating a Lander
lander = new Lander(startSettings);
guage.innerHTML = lander.fuel;
speedometer.innerHTML = lander.velocity;


// Setting up the Canvas
canvas = document.getElementById("canvas");
canvas.style.height = "800px";
canvas.style.width = "1200px";
c = canvas.getContext('2d');
const img = document.getElementById("stars");

window.onload = function () {

    c.drawImage(img, 0, 0, imgWidth, imgHeight);   
}

c.fillStyle = 'gray';
c.fillRect(0, canvas.height-1, 5, canvas.width);

function showMessage(message, color){
    const box = document.getElementById("gameMsg");
    box.style.display = "block";
    box.style.color = color;
    box.innerHTML = message;

}

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

window.addEventListener(
    "keydown", e => {
        readout.innerHTML = e.key;
        lander.thrusters(e);
        let alarm = lander.burn(e);
        if (e.key === "Escape"){
            lander.restart(startSettings);
            animate();
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
    animate()

    
});

function animate() {
    c.drawImage(img, 0, 0, imgWidth, imgHeight);
    c.fillStyle = 'gray';
    c.fillRect(0, canvas.height-5, canvas.width, 5);  
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
    console.log("log", (lander.velocity*10).toFixed(2));
    if (lander.y+spriteSize[0] >= canvas.height-2) {
        let alarm = false;
        if(lander.fuel===0){
            alarm = true;
        }
        refreshGuages(alarm=alarm);
        lander.crashed = true;
        if (lander.velocity > .4) {
            console.log("Crashed!");
            showMessage("FUCK!", "red");
        } else {
            console.log("Safe landing!");
            showMessage("Safe Landing!", "cyan");
        }
    }
    if (lander.crashed==false){
        window.requestAnimationFrame(animate);
    }
    
}

animate()

