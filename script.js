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

    // Public
    let frameRate = 30;

    // Create
    let Create = () => {
        // Object class
        class Obj {
            constructor (x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }

            move (xadd, yadd) {
                this.x += xadd;
                this.y += yadd;
            }

            outOfBounds () {
                return this.bbox_left < 0 || this.bbox_top < 0 || this.bbox_right >= 
            }

            update () {
                this.bbox_left = x;
                this.bbox_top = y;
                this.bbox_right = x + width;
                this.bbox_bottom = y + height;
                this.bbox_x = x + width/2;
                this.bbox_y = y + height/2;
            }
        }

        // Player
        let player = new Obj(32, 64);
        player.gravity = 0;
    }

    // Step
    let Step = () => {
        // Player gravity

    }

    setInterval(Step, 1000/frameRate);
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