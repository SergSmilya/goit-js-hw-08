import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    console.log(e);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
