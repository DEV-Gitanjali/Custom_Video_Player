 const video = document.getElementById('video');
 const play = document.getElementById('play');
 const stop = document.getElementById('stop');
 const progress = document.getElementById('progress');
 const timestamp= document.getElementById('timestamp');

//  play & pause video
function toggleVideoStatus(){
    return true;

}

// update play/pause icon
function upadatePlayIcon(){
    return true;
}


// update progress & time stamp
function upadateProgress(){
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





