const videoPlayer = new Vimeo.Player('vimeo-player', {
    id: 76979871, // Replace with your Vimeo video ID
    width: 640
});

videoPlayer.on('play', function() {
    console.log('Video is playing');
});

videoPlayer.on('pause', function() {
    console.log('Video is paused');
});

videoPlayer.on('ended', function() {
    console.log('Video has ended');
});

// Additional event listeners and methods can be added here for more functionality.