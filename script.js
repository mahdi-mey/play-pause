// Get all audio elements
const audioElements = document.querySelectorAll('.music');

// Add event listeners to each audio element
audioElements.forEach(audio => {
  audio.addEventListener('play', function() {
    // Pause other audio elements
    audioElements.forEach(otherAudio => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });
  });
});