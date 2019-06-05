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