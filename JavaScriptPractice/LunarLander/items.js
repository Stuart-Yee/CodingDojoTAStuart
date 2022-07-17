const mainThruster = .4;
const latThruser = .2

class Lander{
    constructor(settings){
        this.x = settings.position.x
        this.y = settings.position.y
        this.fuel = settings.fuel;
        this.velocity = settings.velocity;
        this.lateral = settings.lateral;
        this.crashed = false;
    }

    draw(c, size){
        this.y += this.velocity;
        this.x += this.lateral;
        // legacy animation with rectangle
        // c.fillStyle = 'blue';
        // c.fillRect(this.x, this.y, size[0], size[1]);
        const landerSprite = document.getElementById("lander");
        c.drawImage(landerSprite, this.x, this.y, size[0], size[1]);
    }

    burn(e){
        if(e.key === "ArrowUp" && this.fuel > 0 && this.crashed == false){
            this.fuel--;
            this.velocity -= mainThruster;
        }
        if (this.fuel > 0){
            return false;
        } else {
            return true;
        }
    }

    thrusters(e) {
        switch(e.key){
            case "ArrowRight":
                console.log("right arrow");
                this.fuel--;
                this.lateral += latThruser;
                break;
            case "ArrowLeft":
                this.fuel--;
                this.lateral -= latThruser;
                console.log("left arrow")
                break;
        }
    }

    // Need another lander?
    restart(startSettings) {
        console.log("refresh initiated");
        this.x = startSettings.position.x;
        this.y = startSettings.position.y;
        this.fuel = startSettings.fuel;
        this.velocity = startSettings.velocity;
        this.lateral = startSettings.lateral
        this.crashed = false;
    }
}