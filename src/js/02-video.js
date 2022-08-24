import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VP_CURRENTTIME_LS_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeToUpdateLocStor = function ({ seconds }) {
  localStorage.setItem(VP_CURRENTTIME_LS_KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(onTimeToUpdateLocStor, 1000));

player
  .setCurrentTime(JSON.parse(localStorage.getItem(VP_CURRENTTIME_LS_KEY)))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        seconds = 0; // the time was less than 0 or greater than the video’s duration
        break;

      default: // some other error occurred
        seconds = 0;
        break;
    }
  });
