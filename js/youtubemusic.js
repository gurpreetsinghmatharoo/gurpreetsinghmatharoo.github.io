// Image to change
let imgclass = "thumbnail style-scope ytmusic-data-bound-header-renderer no-transition";

// Ensure it is working
console.log("Meesa JavaScript");

// Get background element
backElm = document.body;

// Add listeners to update background
window.addEventListener("load", updateBack);
window.addEventListener("mousedown", () => {
  setTimeout(updateBack, 1200);
});

// Set CSS properties
var style = document.createElement('style');
style.innerHTML = `
body {
    /*background-color: #181525;*/
    background: url(https://f.fwallpapers.com/images/cHPCE3jY.jpg);
    background-attachment: fixed;
}

#layout {
    background-color: rgba(5, 5, 12, 0.9);
    padding-bottom: 512px;
}

ytmusic-data-bound-header-renderer {
    background: none;
}
`;
document.head.appendChild(style);

// Update background
function updateBack () {
  console.log("updateBack()");
  
  // Find image
	let elms = document.getElementsByClassName(imgclass);
	let elm_img = elms[0].childNodes[0];
	let src_img = elm_img.src;
  src_img = src_img.replace("302", "1024");
  src_img = src_img.replace("302", "1024");
  
  // Set as background
	console.log("SETTING BACKGROUND TO: " + src_img);
	
	backElm.style.backgroundImage = "url(" + src_img + ")";
  backElm.style.backgroundRepeat = "no-repeat";
  backElm.style.backgroundSize = "cover";
  backElm.style.backgroundAttachment = "fixed";
}