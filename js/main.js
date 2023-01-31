const elements = {
  playBtn: document.querySelector('.about__play'),
  video: document.querySelector('.about__video video'),
};

elements.playBtn.onclick = () => {
  elements.video.play();
  elements.video.setAttribute('controls', 'controls');
  elements.playBtn.classList.add('about__play--hidden');
};
