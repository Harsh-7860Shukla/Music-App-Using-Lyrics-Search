console.log("Welcome to Musu")

// Intialize the Variables 
let songIndex = 0;
let audioElement= new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('masterplay');
let songs = [
    {songName: "calaboose", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "calaboose", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "calaboose", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "calaboose", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "calaboose", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "calaboose", filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
]

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})


// Liesten to Events.
myProgressBar.addEventListener('timeupdate',()=>{
 console.log('timeupdate');
 //update Seekbar
})