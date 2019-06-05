// Canvas
let canvas = document.getElementById("funcanvas");
let main = document.getElementById("main");

if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    // Size
    canvas.width = main.offsetWidth;
    canvas.height = 160;

    // Fill
    //ctx.fillStyle = "rgb(1, 0.8, 0.5, 1)";
    //ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Input
    var iLeft = 0, iRight = 0, iUp = 0, iDown = 0;

    // Down
    document.addEventListener('keydown', function(event) {
        if (event.key == 'a') {
            iLeft = true;
        }
        else if (event.key == 'd') {
            iRight = true;
        }
    });

    // Up
    document.addEventListener('keyup', function(event) {
        if (event.key == 'a') {
            iLeft = false;
        }
        else if (event.key == 'd') {
            iRight = false;
        }
    });

    // Public
    let frameRate = 60;

    // Room
    let room = {
        width : canvas.width,
        height : canvas.height
    }

    // Object class
    class Obj {
        constructor (x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;

            // Default values
            this.color = "rgba(255, 255, 255, 1)"
        }

        move (xadd, yadd) {
            // Collision
            if (this.collision(xadd, 0)) {
                xadd = 0;
                console.log("Collision found on x")
            }
            if (this.collision(0, yadd)) {
                yadd = 0;
                console.log("Collision found on y")
            }

            // Move
            this.x += xadd;
            this.y += yadd;

            // Update
            this.update();
        }

        outOfBounds (xadd, yadd) {
            return (this.bbox_left + xadd) < 0 || (this.bbox_top + yadd) < 0 || (this.bbox_right + xadd) >= room.width || (this.bbox_bottom + yadd) >= room.height;
        }

        collision (xadd, yadd) {
            return this.outOfBounds(xadd, yadd);
        }

        update () {
            this.bbox_left = this.x;
            this.bbox_top = this.y;
            this.bbox_right = this.x + this.width;
            this.bbox_bottom = this.y + this.height;
            this.bbox_x = this.x + this.width/2;
            this.bbox_y = this.y + this.height/2;
        }

        draw () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    // Player
    let player = new Obj (32, 64, 32, 32);
    player.gravity = 0;
    player.moveSpeed = 4;

    // Step
    let Step = () => {
        // Player gravity
        player.gravity += 0.08;
        player.move(0, player.gravity);

        // Move
        let axis_x = iRight - iLeft;
        let axis_y = iDown - iUp;
        player.move(axis_x * player.moveSpeed, 0);
    }

    setInterval(Step, 1000/frameRate);

    // Draw
    let Draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw player
        player.draw();
    }

    setInterval(Draw, 1000/frameRate);
}


// Showcase
let ids = document.getElementsByClassName("sh_preview");

for (let i=0; i<ids.length; i++) {
    let id = ids[i];
    
    id.addEventListener("click", function() {
        this.classList.toggle("active");
        
        let content = this.nextElementSibling;
        content.classList.toggle("active");
        
        if (content.style.position && content.style.position!="absolute") {
            
        }
        else {
            window.scrollTo({
                left: 0,
                top: content.parentElement.offsetTop + content.offsetTop,
                behavior: "smooth"
            });
        }
    });
}

// Highlights
let sh_ids = ids;
ids = document.getElementsByClassName("hl_item");

for (let i=0; i<ids.length; i++) {
    let id = ids[i];
    
    // Set corresponding showcase preview
    //for (let j=0; j<sh_ids.length; j++) {
        
    //}
    
    // Add click event listener
    id.addEventListener("click", function() {
        let idName = id.id.substring(3, id.id.length);
        let content  = document.getElementById("sh_" + idName);
        
        window.scrollTo({
            left: 0,
            top: content.parentElement.offsetTop + content.offsetTop,
            behavior: "smooth"
        });
    });
}

// Spoilers
ids = document.getElementsByClassName("spoiler");

for (let i=0; i<ids.length; i++) {
    let id = ids[i];
    
    id.addEventListener("click", function() {
        this.classList.toggle("active");
        
        let content = this.children[0];
        content.classList.toggle("active");
    });
}