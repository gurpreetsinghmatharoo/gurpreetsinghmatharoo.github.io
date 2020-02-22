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

// Update background
function updateBack () {
  console.log("updateBack()");
  
	let elms = document.getElementsByClassName(imgclass);
	let elm_img = elms[0].childNodes[0];
	let src_img = elm_img.src;
  src_img = src_img.replace("302", "1024");
  src_img = src_img.replace("302", "1024");
  
  console.log(elms);
	
	console.log("SETTING BACKGROUND TO: " + src_img);
	
	backElm.style.backgroundImage = "url(" + src_img + ")";
  backElm.style.backgroundRepeat = "no-repeat";
  backElm.style.backgroundSize = "cover";
  backElm.style.backgroundAttachment = "fixed";
}