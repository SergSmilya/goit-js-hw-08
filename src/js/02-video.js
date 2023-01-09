import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';
const GETITEMLOCALSTOR = localStorage.getItem(KEY);

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem(KEY, e.seconds);
    console.log(e);
  }, 1000)
);

if (GETITEMLOCALSTOR) player.setCurrentTime(GETITEMLOCALSTOR);
