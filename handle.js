import render from './render.js';


const handleGoToHome = function() {
  $('.homebut').on('click', e => {
    e.preventDefault();
    $('main').empty();
    console.log('aboutRender running');
    render.homeRender();
  });
};

const handleGoToAbout = function() {
  console.log('about handler')
  $('.aboutbut').on('click', e => {
    e.preventDefault();
    $('main').empty();
    console.log('aboutRender running');
    render.aboutRender();
  });
};

const handleGoToProject = function() {
  console.log('here?')
  $('.projectsbut').on('click', e => {
    e.preventDefault();
    console.log('projects')
    $('main').empty();
    render.projectsRender();

  });
};

const handleGoToContact = function() {
  $('.contactbut').on('click', e => {
    e.preventDefault();
    $('main').empty();
    console.log('contactRender running');
    render.contactRender();
  });
};




export default {
  handleGoToProject,
  handleGoToAbout,
  handleGoToContact,
  handleGoToHome
};