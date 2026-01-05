function scrollLove() {
  document.getElementById("love").scrollIntoView({ behavior: "smooth" });
}

function playSong() {
  document.getElementById("song").play();
}
function unlock() {
  const p = document.getElementById("pass").value.toLowerCase();
  if (p === "muskan") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Wrong password 😜 Try again");
  }
}
function emojiBlast() {
  const emojis = ["❤️", "💖", "💕", "😍", "😘", "💞", "💓", "💘"];

  for (let i = 0; i < 60; i++) { // 👈 jitna zyada number, utne zyada emoji
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.bottom = "0px";
    emoji.style.animationDuration = (2 + Math.random() * 2) + "s";

    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 4000);
  }
}
function unlock() {
  const p = document.getElementById("pass").value.toLowerCase();

  if (p === "muskan") {
    // lock screen hide
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    // 🎶 AUTO PLAY SONG
    const song = document.getElementById("song");
    song.volume = 0.7; // smooth sound
    song.play().catch(err => {
      console.log("Autoplay blocked:", err);
    });

  } else {
    alert("Wrong password 😜 phir se try karo");
  }
}
