(function l(i, d, t) {
  setTimeout(() => {
    if (Math.round(document.querySelector('#movie_player').getVolume()) - t > 0) {
      if (i > t) l(i - 1, d, t);
    } else if (Math.round(document.querySelector('#movie_player').getVolume()) - t < 0) {
      if (i < t) l(i + 1, d, t);
    }
    document.querySelector('#movie_player').setVolume(i);
    /*console.log(`current volume: ${i}\ndelay: ${d}\ntarget volume: ${t}`)*/
  }, d)
})(
  Math.round(document.querySelector('#movie_player').getVolume()),
  parseInt(window.prompt('delay(ms)', 10)),
  parseInt(window.prompt('target(%)', 0))
);