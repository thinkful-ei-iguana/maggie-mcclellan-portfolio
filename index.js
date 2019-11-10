import render from './render.js';

$(window).on('load', e => {
  e.preventDefault();
  render.homeRender();
});