import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem(KEY, e.seconds);
    console.log(e);
  }, 1000)
);

if (localStorage.getItem(KEY)) player.setCurrentTime(localStorage.getItem(KEY));
