 const video = document.getElementById('video');
 const play = document.getElementById('play');
 const stop = document.getElementById('stop');
 const progress = document.getElementById('progress');
 const timestamp= document.getElementById('timestamp');

//  play & pause video
function toggleVideoStatus(){

    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
        

}

// update play/pause icon
function upadatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class = "fa fa-play fa-2x"></i>';
    }else{
        play.innerHTML = '<i class = "fa fa-pause fa-2x"></i>';
        
    }
}

// Update progress & timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
  
    // Get the minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < video.duration){
      mins = '0' + String(mins);
    }
  
    // Get Seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < video.duration){
      secs = '0' + String(secs);
    }
  
    timestamp.innerHTML = `${mins}:${secs}`;
  }




// Set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
  }
  

// stop video 
function stopVideo(){
    
video.currentTime = 0;
video.pause();
}


//  event listeners

video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',upadatePlayIcon);
video.addEventListener('play',upadatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click' , toggleVideoStatus);

stop.addEventListener('click' , stopVideo);

play.addEventListener('change' , setVideoProgress);





