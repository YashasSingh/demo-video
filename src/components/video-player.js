class VideoPlayer {
    constructor(videoId) {
        this.videoId = videoId;
        this.player = null;
    }

    init() {
        const options = {
            id: this.videoId,
            width: 640,
            loop: true
        };

        this.player = new Vimeo.Player('vimeo-player', options);

        this.player.on('play', function() {
            console.log('Video is playing');
        });

        this.player.on('pause', function() {
            console.log('Video is paused');
        });

        this.player.on('ended', function() {
            console.log('Video has ended');
        });
    }

    play() {
        this.player.play();
    }

    pause() {
        this.player.pause();
    }

    setVolume(volume) {
        this.player.setVolume(volume);
    }
}

export default VideoPlayer;