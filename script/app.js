$(function() {
    const discord_button = document.getElementById("discord")
    const textContainer = document.getElementById('textContainer');
    let isShown = false; 
    discord_button.addEventListener('click', (data) => {
        if (isShown) {
            return;
        }
        console.log('chroma51')
        const newText = document.createTextNode('chroma51');
        textContainer.appendChild(newText);
        isShown = true
        setTimeout(function() {
            textContainer.removeChild(newText);
            isShown = false
        }, 5000);
    })
    function isTextShown() {
        return isShown;
    }
    setTimeout(function() {
        console.log("Is text shown?", isTextShown());
    }, 2000);
})