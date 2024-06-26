function displayTime() {
    let element = document.getElementById("clock"); // Find element with id="clock" 
    let now = new Date(); // Get current time
    element.innerHTML = now.toLocaleTimeString(); // Display time
    setTimeout(displayTime, 1000); // Call the function every second
}
window.onload = displayTime; // Start displaying the time after the document is loaded
