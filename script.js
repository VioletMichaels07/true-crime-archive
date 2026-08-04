// Keeping track of site version dynamically because I'll probably forget to update it manually
const year = new Date().getFullYear();
const author = "Violet Donna Michaels";

console.log(`%c[True Crime Archive] %cLoaded successfully for ${year}. Built by ${author}.`, 
    'color: crimson; font-weight: bold;', 
    'color: inherit;'
);

document.addEventListener("DOMContentLoaded", () => {
    // Note to self: check if mobile view messes up the grid padding later
    console.log("DOM fully loaded and parsed. Ready for research.");
});
