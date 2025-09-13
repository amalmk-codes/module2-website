// Accordion functionality
function toggleAcc(el){
    const body = el.nextElementSibling;
    if(body.style.display === 'block'){ 
        body.style.display = 'none'; 
        el.querySelector('span').textContent = '+'; 
    } else { 
        body.style.display = 'block'; 
        el.querySelector('span').textContent = '−'; 
    }
}

// Lightbox functionality for poster images
document.addEventListener("DOMContentLoaded", function(){
    const posters = document.querySelectorAll(".poster-gallery img");
    
    // Create overlay div
    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    document.body.appendChild(overlay);

    // Add image to overlay
    const overlayImage = document.createElement("img");
    overlay.appendChild(overlayImage);

    // Click poster to open overlay
    posters.forEach(poster => {
        poster.addEventListener("click", function(){
            overlay.style.display = "flex";
            overlayImage.src = this.src;
        });
    });

    // Click overlay to close
    overlay.addEventListener("click", function(){
        overlay.style.display = "none";
    });
});
