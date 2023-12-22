const Hablar = new SpeechSynthesisUtterance();

function Play(){
    const Mensaje = document.getElementById("mensaje").value
    Hablar.lang = "en-US"; 
    Hablar.text = Mensaje
    window.speechSynthesis.speak(Hablar)
}