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


// update progress & time stamp
function upadateProgress(){
    
}
 

// set video time to progress 
function setVideoProgress(){
    
}

// stop video 
function stopVideo(){
    return true;

}


//  event listeners

video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',upadatePlayIcon);
video.addEventListener('play',upadatePlayIcon);
video.addEventListener('timeupdate',upadateProgress);

play.addEventListener('click' , toggleVideoStatus);

stop.addEventListener('click' , stopVideo);

play.addEventListener('change' , setVideoProgress);





