import render from './render.js';
import handle from './handle.js';

$(window).on('load', e => {
  e.preventDefault();
  render.homeRender();
  handle.handleGoToProject();
  handle.handleGoToAbout();
  handle.handleGoToContact();
});