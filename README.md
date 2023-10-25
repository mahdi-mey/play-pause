# Why is this project important?

### First get all audio files
``` Js
  const audioElements = document.querySelectorAll('.music');
```

### Then add event listeners to each audio element 

``` Js
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
```

## Technologies Used

- HTML
- CSS
- JavaScript

## Clone The Repository

``` bash
  git clone https://github.com/mahdi-mey/temperature-converter.git
```
