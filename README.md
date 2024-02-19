# Why is this project important?

This project aims to improve the user experience by providing audio functionality that allows users to play and pause audio files seamlessly. By incorporating this feature, you can enhance the overall interactivity and engagement of your web application

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
