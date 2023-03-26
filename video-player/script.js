const video = document.getElementById("myVideo");
        const playPause = document.getElementById("playPause");
        const progress = document.getElementById("progress");
        const volume = document.getElementById("volume");
        const mute = document.getElementById("mute");

        video.addEventListener("timeupdate", function() {
            let percent = (video.currentTime / video.duration) * 100;
            progress.value = percent;
        });

        progress.addEventListener("input", function() {
            let time = video.duration * (progress.value / 100);
            video.currentTime = time;
        });

        playPause.addEventListener("click", function() {

            playPause.classList.remove('hide')


            if (video.paused) {
                video.play();
                playPause.innerHTML = "<i class='fa fa-pause-circle'>";
                setTimeout(() => {
                    playPause.classList.toggle('hide')
                }, 300)
            } else {
                video.pause();
                playPause.innerHTML = "<i class='fa fa-play-circle'>";
            }


        });



        volume.addEventListener("input", function() {
            video.volume = volume.value;
        });

        mute.addEventListener("click", function() {
            if (video.muted) {
                video.muted = false;
                mute.innerHTML = "mute";
            } else {
                video.muted = true;
                mute.innerHTML = "unmute";
            }
        });