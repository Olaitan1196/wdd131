// Get the current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modification date of the document
document.getElementById("lastModified").textContent = 
    "Last Modification: " + document.lastModified;
