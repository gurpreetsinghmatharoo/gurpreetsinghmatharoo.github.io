// Canvas
// let canvas = document.getElementById("funcanvas");
// let main = document.getElementById("main");

// if (canvas.getContext) {
//     let ctx = canvas.getContext("2d");

//     // Size
//     canvas.width = main.offsetWidth;
//     canvas.height = 160;

//     // Fill
//     //ctx.fillStyle = "rgb(1, 0.8, 0.5, 1)";
//     //ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Input
//     var iLeft = 0, iRight = 0, iUp = 0, iDown = 0;

//     // Down
//     document.addEventListener('keydown', function(event) {
//         if (event.key == 'a') {
//             iLeft = true;
//         }
//         else if (event.key == 'd') {
//             iRight = true;
//         }
//         else if (event.key == 'w') {
//             iUp = true;
//         }
//     });

//     // Up
//     document.addEventListener('keyup', function(event) {
//         if (event.key == 'a') {
//             iLeft = false;
//         }
//         else if (event.key == 'd') {
//             iRight = false;
//         }
//         else if (event.key == 'w') {
//             iUp = false;
//         }
//     });

//     // Public
//     let frameRate = 60;

//     // Room
//     let room = {
//         width : canvas.width,
//         height : canvas.height
//     }

//     // Object class
//     class Obj {
//         constructor (x, y, width, height) {
//             this.x = x;
//             this.y = y;
//             this.width = width;
//             this.height = height;

//             // Color
//             this.color = "rgba(255, 255, 255, 1)"

//             // Sprite
//             this._spriteLoaded = false;
//             this._spriteIndex = 0;
//             this._imageIndex = 0;
//             this._imageNumber = 0;
//             this._imageSpeed = 1;

//             this._spriteWidth = 0;
//             this._spriteHeight = 0;

//             // Scale
//             this._imageXScale = 1;
//             this._imageYScale = 1;
//         }

//         // Set
//         setSprite (name, frames, fps) {
//             this._spriteLoaded = false;
//             this._spriteIndex = new Image();

//             this._spriteIndex.onload = () => {
//                 console.log("Image loaded (" + name + "), size: " + this._spriteIndex.width + ", " + this._spriteIndex.height);

//                 this._spriteLoaded = true;
//                 this._spriteWidth = this._spriteIndex.width / this._imageNumber;
//                 this._spriteHeight = this._spriteIndex.height;
//             }

//             this._spriteIndex.src = "sprites/" + name + ".png";
//             this._imageNumber = frames;
//             this._imageSpeed = fps / frameRate;
//         }

//         setScale (xscale, yscale) {
//             this._imageXScale = xscale;
//             this._imageYScale = yscale;
//         }

//         // Movement / Collisions
//         move (xadd, yadd) {
//             // Collision
//             if (this.collision(xadd, 0)) {
//                 while (!this.collision(Math.sign(xadd), 0)) {
//                     this.x += Math.sign(xadd);
//                     this.update();
//                 }

//                 xadd = 0;
//             }
//             if (this.collision(0, yadd)) {
//                 while (!this.collision(0, Math.sign(yadd))) {
//                     this.y += Math.sign(yadd);
//                     this.update();
//                 }

//                 yadd = 0;
//             }

//             // Move
//             this.x += xadd;
//             this.y += yadd;

//             // Update
//             this.update();
//         }

//         outOfBounds (xadd, yadd) {
//             return (this.bbox_left + xadd) < 0 || (this.bbox_top + yadd) < 0 || (this.bbox_right + xadd) >= room.width || (this.bbox_bottom + yadd) >= room.height;
//         }

//         collision (xadd, yadd) {
//             return this.outOfBounds(xadd, yadd);
//         }

//         grounded () {
//             return this.collision(0, 1);
//         }

//         // Step Functions
//         update () {
//             this.bbox_left = this.x;
//             this.bbox_top = this.y;
//             this.bbox_right = this.x + this.width * this._imageXScale;
//             this.bbox_bottom = this.y + this.height * this._imageYScale;
//             this.bbox_x = this.x + this.width/2;
//             this.bbox_y = this.y + this.height/2;
//         }

//         step () {
//             // Image speed
//             this._imageIndex += this._imageSpeed;

//             this._imageIndex = this._imageIndex % this._imageNumber;
//         }

//         draw () {
//             // Draw rect
//             if (!this._spriteLoaded) {
//                 ctx.fillStyle = this.color;
//                 ctx.fillRect(this.x, this.y, this.width, this.height);
//             }
//             // Draw sprite
//             else {
//                 // Get coordinates
//                 let sub = Math.floor(this._imageIndex);

//                 let _x = this._spriteWidth * sub;
//                 let _y = 0;

//                 console.log(_x + ", " + _y + ", " + this._spriteWidth + ", " + this._spriteHeight);
                
//                 // Draw
//                 ctx.drawImage(this._spriteIndex, _x, _y, this._spriteWidth, this._spriteHeight,
//                     this.x, this.y, this._spriteWidth * this._imageXScale, this._spriteHeight * this._imageYScale);
//             }
//         }
//     }

//     // Player
//     let player = new Obj (32, 64, 32, 32);
//     player.gravity = 0;
//     player.moveSpeed = 4;
//     player.jumpSpeed = 10;

//     player.setSprite("matharoo_idle", 2, 6);

//     // Step
//     let Step = () => {
//         player.step();

//         // Player gravity
//         player.gravity += 0.8;
//         player.move(0, player.gravity);

//         // Move
//         let axis_x = iRight - iLeft;
//         let axis_y = iDown - iUp;
//         player.move(axis_x * player.moveSpeed, 0);

//         // Jump
//         if (player.grounded() && iUp) {
//             player.gravity = -player.jumpSpeed;
//         }
//     }

//     setInterval(Step, 1000/frameRate);

//     // Draw
//     let Draw = () => {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         // Draw player
//         player.draw();
//     }

//     setInterval(Draw, 1000/frameRate);
// }

// Showcase
let ids = document.getElementsByClassName("sh_preview");

for (var i=0; i<ids.length; i++) {
    let id = ids[i];
    
    id.addEventListener("click", function() {
        this.classList.toggle("active");
        
        let content = this.nextElementSibling;
        content.classList.toggle("active");
        let rect = content.getBoundingClientRect();
        let top = window.scrollY + rect.top - 400;
        
        if (content.style.position && content.style.position!="absolute") {
            
        }
        else {
            window.scrollTo({
                left: 0,
                top: top,
                behavior: "smooth"
            });
        }
    });
}

// Highlights
let sh_ids = ids;
ids = document.getElementsByClassName("hl_item");

for (var i=0; i<ids.length; i++) {
    let id = ids[i];
    
    // Set corresponding showcase preview
    //for (let j=0; j<sh_ids.length; j++) {
        
    //}
    
    // Add click event listener
    id.addEventListener("click", function() {
        let idName = id.id.substring(3, id.id.length);
        let content  = document.getElementById("sh_" + idName);
        let rect = content.getBoundingClientRect();
        let top = window.scrollY + rect.top - 200;
        
        window.scrollTo({
            left: 0,
            top: top,
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