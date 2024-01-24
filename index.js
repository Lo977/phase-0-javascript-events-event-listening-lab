function addingEventListener() {
    const button = document.getElementById("button");
     function buttonClicked() {
        alert("I was clicked");
    }
    button.addEventListener("CLICK", buttonClicked);
}
addingEventListener();