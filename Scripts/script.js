let musicas = [
    {
        title: "Believer",
        singer: "Imagine Dragons",
        src: "./Musics/ImagineDragons-Believer.mp3",
        src2: "./MusicsImages/Believer.jpg"
    },
    {
        title: "Creep",
        singer: "Radiohead",
        src: "./Musics/Radiohead-Creep.mp3",
        src2: "./MusicsImages/Creep.jpg"
    },
    {
        title: "Enemy",
        singer: "Imagine Dragons",
        src: "./Musics/ImagineDragons-Enemy.mp3",
        src2: "./MusicsImages/Enemy.jpg"
    },
    {
        title: "Human",
        singer: "Rag'n'Bone Man",
        src: "./Musics/RagNBoneMan-Human.mp3",
        src2: "./MusicsImages/Human.png"
    },
    {
        title: "The Silence",
        singer: "Manchester Orchestra",
        src: "./Musics/ManchesterOrchestra-TheSilence.mp3",
        src2: "./MusicsImages/Manchester.webp"
    },
    {
        title: "Over The Rainbow",
        singer: "Israel Kamakawiwoo",
        src: "./Musics/Israel-OverTheRainbow.mp3",
        src2: "./MusicsImages/OverTheRainbow.jpg"
    },
    {
        title: "Sleep On The Floor",
        singer: "The Lumineers",
        src: "./Musics/TheLumineers-SleepOnTheFloor.mp3",
        src2: "./MusicsImages/SleepOnTheFloor.jpg"
    },
    {
        title: "Take Me To Church",
        singer: "Hozier",
        src: "./Musics/Hozier-TakeMeToChurch.mp3",
        src2: "./MusicsImages/take-me-to-church-ep.jpg"
    },
    {
        title: "Way Down We Go",
        singer: "Kaleo",
        src: "./Musics/Kaleo-WayDownWeGo.mp3",
        src2: "./MusicsImages/WayDownWeGo.jpg"
    }
]
let bars = [
    bars1,
    bars2,
    bars3,
    bars4,
    bars5,
    bars6,
    bars7,
    bars8,
    bars9,
]

let bkg = [
    "../BackgroundImages/Believer.jpg",
    "../BackgroundImages/Creep.webp",
    "../BackgroundImages/Enemy.webp",
    "./BackgroundImages/Human.jpg",
    "./BackgroundImages/Manchester.jpg",
    "./BackgroundImages/OverTheRainbow.webp",
    "./BackgroundImages/SleepOnTheFloor.png",
    "./BackgroundImages/take-me-to-church-ep.webp",
    "./BackgroundImages/WayDownWeGo.jpg"
]

let btnPlay = document.getElementById("play1")
let btnBack = document.getElementById("back")
let btnNext = document.getElementById("next")
let btnDark = document.getElementById("darkMode")
let btnsHover = document.querySelectorAll(".icons2")
let classPlayer = document.querySelectorAll(".player")
let player = document.getElementById("removeClass")
let topBox = document.getElementById("topBar")
let musicBox = document.querySelectorAll(".nameMusic")
let singerBox = document.querySelectorAll(".singers")
let singerPlayer = document.getElementById("singerPlayer")
let titlePlayer = document.getElementById("titlePlayer")
let audioPlayer = document.getElementById("audioPlayer")
let imagePlayer = document.getElementById("imagePlayer")
let addList = document.getElementById("addList")
let icons = document.getElementById("icons")
let navegation = document.getElementById("navegation")
let body1 = document.querySelector("body")
let tds = document.querySelectorAll('.bars');
let k = true
let g = true
let t = true
let l = true
let i = 0

progressBar = document.querySelector(".progress-bar")
audio = document.querySelector("audio")

tds.forEach((bars) => {
    bars.style.setProperty('--bars-background-color', 'rgba(255, 255, 255, 0.3)');
})
btnsHover.forEach((icons2) => {
    icons2.style.setProperty('--icons2-background-color', 'white');
})

btnPlay.addEventListener("click", playSong)
btnNext.addEventListener("click", nextSong)
btnBack.addEventListener("click", backSong)
addList.addEventListener("click", listAdd)
btnDark.addEventListener("click", darkAdd)
btnDark.addEventListener("click", darkAdd2)

let audioCurrentTime = document.querySelector(".begin"),
    audioDuration = document.querySelector(".end")

audio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    let progressWidth = (currentTime / duration) * 100
    progressBar.style.width = progressWidth + "%"

    audio.addEventListener("loadeddata", () => {

        let musicDuration = audio.duration
        let totalMin = Math.floor(musicDuration / 60)
        let totalSec = Math.floor(musicDuration % 60)
        if (totalSec < 10) {
            totalSec = "0" + totalSec
        }
        audioDuration.innerText = totalMin + ":" + totalSec

    })
    let currentMin = Math.floor(currentTime / 60)
    let currentSec = Math.floor(currentTime % 60)
    if (currentSec < 10) {
        currentSec = "0" + currentSec
    }
    audioCurrentTime.innerText = currentMin + ":" + currentSec
})

for (var j = 0; j < 9; j++) {
    bars[j].addEventListener("click", barsSong)
}

function playSong() {
    if (k == false) {
        audioPlayer.play()
        k = true
        btnPlay.setAttribute("src", "./IconsDark/pauseDark.png")
    }
    else {
        audioPlayer.pause()
        k = false
        btnPlay.setAttribute("src", "./IconsDark/playDark.png")
    }
}

function nextSong() {
    i++
    if (i < musicas.length) {
        let song = musicas[i]
        titlePlayer.innerHTML = song.title
        singerPlayer.innerHTML = song.singer
        audioPlayer.setAttribute("src", song.src)
        imagePlayer.setAttribute("src", song.src2)
        body1.style.backgroundImage = "url(" + bkg[i] + ")"
    }
    else
        i = -1
}

function backSong() {
    i--
    if (i < 0) {
        i = 9
        backSong()
    }
    else if (i < musicas.length) {
        let song = musicas[i]
        titlePlayer.innerHTML = song.title
        singerPlayer.innerHTML = song.singer
        audioPlayer.setAttribute("src", song.src)
        imagePlayer.setAttribute("src", song.src2)
        body1.style.backgroundImage = "url(" + bkg[i] + ")"
    }
}

function barsSong() {
    let indicie = this.getAttribute("indicie")
    i = indicie
    nextSong()
}

function listAdd() {
    if (g == true) {
        audioDuration.style.left="90%"
        player.classList.remove("player")
        player.classList.add("show");
        navegation.style.visibility = "hidden"
        imagePlayer.style.width = "60%"
        titlePlayer.style.fontSize = "1.5em"
        singerPlayer.style.fontSize = "1.5em"
        icons.style.left = "20%"
        g = false
    }
    else {
        audioDuration.style.left="82%"
        player.classList.remove("show")
        player.classList.add("player");
        navegation.style.visibility = "visible"
        imagePlayer.style.width = "80%"
        titlePlayer.style.fontSize = "0.8em"
        singerPlayer.style.fontSize = "0.8em"
        icons.style.left = "0%"
        g = true
    }
}

function darkAdd() {
    if (t == true) {
        navegation.style.backgroundColor = "white"
        navegation.style.borderColor = "black"
        topBox.style.color = "black"
        topBox.style.borderColor = "black"
        musicBox.forEach(nameMusic => {
            nameMusic.style.color = "black";
        });
        singerBox.forEach(singers => {
            singers.style.color = "black"
        })
        tds.forEach((bars) => {
            bars.style.setProperty('--bars-background-color', 'rgba(0,0,0,0.3)');
        });
        btnDark.setAttribute("src", "./IconsSun/changeSun.png")
        t = false
    }
    else {
        navegation.style.backgroundColor = "rgb(25, 25, 25)"
        navegation.style.borderColor = "white"
        topBox.style.color = "white"
        topBox.style.borderColor = "white"
        musicBox.forEach(nameMusic => {
            nameMusic.style.color = "white";
        });
        singerBox.forEach(singers => {
            singers.style.color = "white"
        })
        tds.forEach((bars) => {
            bars.style.setProperty('--bars-background-color', 'rgba(255, 255, 255, 0.3)');
            btnDark.setAttribute("src", "./IconsDark/changeDark.png")
            t = true
        });
    }
}

function darkAdd2() {
    if (l == true) {
        titlePlayer.style.color = "black"
        singerPlayer.style.color = "black"
        classPlayer.forEach((player) => {
            player.style.backgroundColor = "white"
        })
        btnsHover.forEach((icons2) => {
            icons2.style.setProperty('--icons2-background-color', 'rgba(0,0,0,0.2)');
        })
        l = false
    }
    else {
        titlePlayer.style.color = "white"
        singerPlayer.style.color = "white"
        classPlayer.forEach((player) => {
            player.style.backgroundColor = "rgb(25, 25, 25)"
        })
        btnsHover.forEach((icons2) => {
            icons2.style.setProperty('--icons2-background-color', 'white');
        })
        l = true
    }
}

