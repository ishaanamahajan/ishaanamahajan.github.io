// Smooth scrolling
function toggleDetails(id) {
    let details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}


function toggleProjectDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details.style.maxHeight) {
        details.style.maxHeight = null;
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
    }
}
