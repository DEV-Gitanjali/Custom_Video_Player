 const video = document.getElementById('video');
 const play = document.getElementById('play');
 const stop = document.getElementById('stop');
 const progress = document.getElementById('progress');
 const timestamp= document.getElementById('timestamp');
 
//  event listeners

video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',upadatePlayIcon);
video.addEventListener('play',upadatePlayIcon);
video.addEventListener('timeupdate',upadateProgress);


