/**
 * True Crime Archive - Main Script
 * Author: Violet Donna Michaels (VioletMichaels07)
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("Archive Loaded Successfully");

    // Highlight current page in navigation automatically
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") && currentLocation.includes(link.getAttribute("href"))) {
            link.style.color = "crimson";
            link.style.fontWeight = "bold";
        }
    });
});
