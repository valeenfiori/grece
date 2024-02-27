document.addEventListener("DOMContentLoaded", function () {
  var playButton = document.getElementById("playButton");
  var videoPlayer = document.getElementById("videoPlayer");
  var socialBox = document.getElementById("socialBox");
  var nevermore = document.getElementById("nevermore");
  var background = document.getElementById("background");
  var iconPrincipal = document.getElementById("iconPrincipal");

  playButton.addEventListener("click", function () {
    // Oculta el botón al hacer clic
    playButton.classList.add("hidden");
    iconPrincipal.style.display = "none";
    // Muestra el cuadro de redes sociales
    videoPlayer.style.display = "block";
    socialBox.style.display = "block";
    nevermore.style.display = "block";
    background.style.backgroundColor = "none";
    // Reproduce el video si está pausado
    if (videoPlayer.paused) {
      videoPlayer.play();
    }
  });
});
