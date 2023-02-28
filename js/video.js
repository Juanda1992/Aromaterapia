 function disablePauseButton() {
  var video1 = document.getElementsByTagName('video')[0];
  video1.addEventListener('timeupdate', function() {
    if (video.currentTime > 0) {
      video1.removeEventListener('timeupdate', arguments.callee, false);
      video1.controls = false;
    }
  }, false);
}

var video = document.getElementById("my-video");
var progressBar = document.querySelector(".progress-bar");

video.addEventListener("play", function() {
  var duration = video.duration;
  var halfwayPoint = duration / 2;
  setInterval(function() {
    var progress;
    if (video.currentTime < halfwayPoint) {
      progress = (video.currentTime / halfwayPoint) * 50;
    } else {
      progress = (video.currentTime / duration) * 100;
    }
    progressBar.style.width = progress + "%";
  }, 100);
});


video.addEventListener("fullscreenchange", function() {
  if (document.fullscreenElement === video && document.fullscreenEnabled) {
    document.exitFullscreen();
  }
});
