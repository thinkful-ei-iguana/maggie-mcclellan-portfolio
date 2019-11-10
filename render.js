import handle from './handle.js'



const homeRender = function () {

  $('main').html(
    `<div class="ultimate-container">
  
        <section class="img-container">
            <img src="imgs/doodle-small.png" alt="doodle of Maggie and her cat on a couch" 
            class="doodle homeimg">
        </section>
  
        <section class="content-container home-content">
            <h1 class="hero-bold">I'm Maggie</h1>
            <h2 class="h2home">A Developer in Development</h2>
            <nav class="nav-container">
                <ul class="nav-buttons-home">
                    <li class="home aboutbut">
                        <button type="submit" class="buttonhome">About</a>
                    </li>
                    <li class="home projectsbut">
                        <button type="submit" class="buttonhome">Projects</a>
                    </li>
                    <li class="home contactbut">
                        <button type="button" class="buttonhome">Contact</a>
                    </li>
                </ul>
            </nav>
            <ul class="footer-icons">
                <li>
                    <a href="https://github.com/therealmbittarelli" aria-label="Go to Maggie's GitHub page" class="fa-github icon">
                        <img src="imgs/GitHub-Mark-120px-plus.png" alt="GitHub logo" class="icon-size"/>
                    </a>
                </li>
                <li>
                    <a href="mailto:maggiekmcclellan@gmail.com" aria-label="Email Maggie" class="fa-email icon">
                        <img src="imgs/emaila.png" alt="Email icon shaped like an envelope" class="icon-size"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/maggie-mcclellan-1a686694" aria-label="Go to Maggie's LinkedIn page" class="fa-linkedin icon">
                        <img src="imgs/linkedin.png" alt="LinkedIn icon" class="icon-size"/>
                    </a>
                </li>
            </ul>
        </section>
    </div>`
  );
  handle.handleGoToAbout();
  handle.handleGoToProject();
  handle.handleGoToContact();
};

    
const aboutRender = function() {
    
  $('main').html(
    `<div class="ultimate-container">
  
        <section class="img-container">
            <img src="imgs/doodle-small.png" alt="doodle of Maggie and her cat on a couch" 
            class="doodle aboutimg">
        </section>
  
        <section class="content-container">
              
            <nav class="nav-container">
                <ul class="nav-buttons">
                    <li class="projectsbut">
                        <button type="submit" class="button">PROJECTS</a>
                    </li>
                    <li class="homebut">
                        <button type="submit" class="button">HOME</a>
                    </li>
                    <li class="contactbut">
                        <button type="button" class="button">CONTACT</a>
                    </li>
                </ul>
            </nav>
            <section class="copy-container">
                <h2 class="abouth2">About Me</h2>
                <p class="aboutp">
                    Having graduated from Thinkful's Engineering Immersion course in March of 2020,
                    professional web development is a relatively new pursuit for me, 
                    but I have been a master troubleshooter throughout my 
                    entire life. When I was small, as a leader of our 
                    neighborhood kid brigade, I would be charged with drawing 
                    up drafts of plans to build time machines and rocket ships 
                    (who didn't when they were young?), in particular taking 
                    lead on figuring out how we might cobble together such 
                    complex vehicles with the old car parts and junk
                    scattered around in the surrounding woods.
                </p>
                <p class="aboutp">    
                    Thankfully, the tools available to software engineers 
                    are much more robust! Figuring out fresh ways to 
                    utilize the tools at hand towards building something 
                    incredible is one that will never run the risk of getting 
                    old to me; it’s safe to say that the software development 
                    landscape of what can be learned - and what can be created 
                    - is unending. I look forward to traversing that landscape 
                    for many years to come, and to continuting to encounter
                    new creative and curious minds to work alongside of!
                </p>
                <p class="aboutp">
                    Coding is just one of many threads of passion in my 
                    life- I'm also a trumpet-playing, crazy-dancing member 
                    of a <a href="http://www.facebook.com/flybybrassband" 
                    aria-label="Fly By Brass Band's Facebook page">street band</a>,
                    and co-founded the 
                    <a href="http://www.schoolofhonk.org" aria-label="School 
                    of HONK's homepage">School of HONK</a>, 
                    a nonprofit alternative music school. Or if I'm not in 
                    a spectacle-raising mood, I'm just as happy curling up 
                    with my cat Matto and reading a book I've borrowed 
                    from the local library.
                </p>
            </section>
        </section>
    </div>`
  );

  handle.handleGoToContact();
  handle.handleGoToHome();
  handle.handleGoToProject();
};
    
const projectsRender = function() {
  
  $('main').html(
    `<div class="ultimate-container">
  
        <section class="img-container">
            <img src="imgs/doodle-small.png" alt="doodle of Maggie and her cat on a couch" 
            class="doodle projectsimg">
        </section>
  
        <section class="content-container">
              
            <nav class="nav-container">
                <ul class="nav-buttons">
                    <li class="aboutbut">
                        <button type="submit" class="button">ABOUT</a>
                    </li>
                    <li class="homebut">
                        <button type="submit" class="button">HOME</a>
                    </li>
                    <li class="contactbut">
                        <button type="button" class="button">CONTACT</a>
                    </li>
                </ul>
            </nav>
            <section class="projects-container">
                <h2>My Work</h2>
                <h3>Here's what I've been up to...</h3>
                <div class="project-box">
                    <img src="imgs/bookmark.png" class="project one" alt="screenshot of my bookmark app"/>
                    <p class="project-title"><span id="title-bold">Bookmark Buddy</span> is an app that allows users to manage and rate their bookmarks, created for a class assignment.</p>
                    <p class="project-tech">Technologies used: Javascript, CSS, HTML, jQuery</p>
                    <p class="project-links"><a href="https://github.com/thinkful-ei-iguana/Maggie-bookmarks-app" aria-label="View Bookmark App GitHub repository">GitHub Repository</a> and <a href="https://thinkful-ei-iguana.github.io/Maggie-bookmarks-app/src/index" aria-label="View Bookmark App live page">live app</a></p>
                </div>
                <hr>
                <div class="project-box">
                    <img src="imgs/quiz.png" class="project two"alt="screenshot of my bookmark app"/>
                    <p class="project-title">This <span id="title-bold">Trivia Quiz App</span> dares users to test their Indianapolis Colts knowledge! Built for a class assignment.</p>
                    <p class="project-tech">Technologies used: Javascript, CSS, HTML, jQuery</p>
                    <p class="project-links"><a href="https://github.com/thinkful-ei-iguana/Anthony-Maggie-Quiz" aria-label="View Quiz App GitHub repository">GitHub Repository</a> and <a href="https://thinkful-ei-iguana.github.io/Anthony-Maggie-Quiz/" aria-label="View Quiz App live page">live app</a></p>
                </div>
                <hr>
                <div class="project-box">
                <img src="imgs/bookmark.png" class="project one" alt="screenshot of my bookmark app"/>
                    <p class="project-title"><span id="title-bold">Bookmark Buddy</span> is an app that allows users to manage and rate their bookmarks, created for a class assignment.</p>
                    <p class="project-tech">Technologies used: Javascript, CSS, HTML, jQuery</p>
                    <p class="project-links"><a href="https://github.com/thinkful-ei-iguana/Maggie-bookmarks-app" aria-label="View Bookmark App GitHub repository">GitHub Repository</a> and <a href="https://thinkful-ei-iguana.github.io/Maggie-bookmarks-app/src/index" aria-label="View Bookmark App live page">live app</a></p>
                </div>
                
            </section>
        </section>
    </div>`
  );
  handle.handleGoToAbout();
  handle.handleGoToHome();
  handle.handleGoToContact();
};
    
const contactRender = function() {
    
  $('main').html(
    `<div class="ultimate-container">
              
        <section class="img-container">
            <img src="imgs/doodle-small.png" alt="doodle of Maggie and her cat on a couch" 
            class="doodle contactimg">
        </section>

        <section class="content-container">
            <nav class="nav-container">
                <ul class="nav-buttons">
                    <li class="aboutbut">
                        <button type="submit" class="button">ABOUT</a>
                    </li>
                    <li class="homebut">
                        <button type="submit" class="button">HOME</a>
                    </li>
                    <li class="projectsbut">
                        <button type="button" class="button">PROJECTS</a>
                    </li>
                </ul>
            </nav>
            <section class="contact-content">
                <h2 class="contact-header">Let's collaborate!</h2>
                
                <p class="contactp">Send me an <a href="mailto:maggiekmcclellan@gmail.com" target="_top" aria-label="Maggie's email address">email</a></p>
                <p class="contactp">See my work on <a href="https://github.com/therealmbittarelli" aria-label="Maggie's GitHub page">
                GitHub</a></p>
                <p class="contactp">Find me on <a href="https://www.linkedin.com/in/maggie-mcclellan-1a686694" aria-label="Maggie's LinkedIn page">LinkedIn</a></p>
                <p class="contactp">Feel free to check out my <a href="https://www.instagram.com/wiffleballhero/" aria-label="Maggie's Instagram feed">
                Instagram feed</a>
                to get a glimpse of my recent adventures</p>
            </section>
        </section>
    </div>`
  );
  handle.handleGoToAbout();
  handle.handleGoToHome();
  handle.handleGoToProject();
};
    

  
export default {
  homeRender,
  aboutRender,
  projectsRender,
  contactRender
};