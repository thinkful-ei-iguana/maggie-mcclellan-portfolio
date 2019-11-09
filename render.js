import handle from './handle.js'



const homeRender = function () {

  console.log('hoooo')
  $('main').html(
    `<div class="ultimate-container">
  
          <section class="img-container">
              <img src="imgs/doodle.png" alt="nz image placeholder" 
              class="nz-img">
          </section>
  
          <section class="content-container">
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
                      <a href="https://github.com/therealmbittarelli" class="fa-github icon">
                          <img src="imgs/GitHub-Mark-120px-plus.png" class="icon-size"/>
                      </a>
                  </li>
                  <li>
                      <a href="#" class="fa-email icon">
                          <img src="imgs/emaila.png" class="icon-size"/>
                      </a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/maggie-mcclellan-1a686694" class="fa-linkedin icon">
                          <img src="imgs/linkedin.png" class="icon-size"/>
                      </a>
                  </li>
              </ul>
          </section>
        </div>`
  );
};

    
const aboutRender = function() {
    
  console.log('aboutRender running');
  $('main').html(
    `<div class="ultimate-container">
  
          <section class="img-container">
              <img src="imgs/doodle.png" alt="nz image placeholder" 
              class="nz-img">
          </section>
  
          <section class="content-container">
              
              <nav class="nav-container">
                  <ul class="nav-buttons">
                    <li class="aboutbut">
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
                  <p>
                      Web development is a relatively new pursuit for me, 
                      but I have been a master troubleshooter throughout my 
                      entire life. When I was small, as a leader of our 
                      neighborhood kid brigade, I would be charged with drawing 
                      up drafts of plans to build time machines and rocket ships 
                      (who didn't when they were young?), in particular taking 
                      lead on figuring out how we might cobble together such 
                      complex vehicles with the old car parts and junk
                      scattered around in the surrounding woods.
                  </p>
                  <p>    
                      Thankfully, the tools available to software engineers 
                      are much more robust! Figuring out fresh ways to 
                      utilize the tools at hand towards building something 
                      incredible is one that will never run the risk of getting 
                      old to me; it’s safe to say that the software development 
                      landscape of what can be learned - and what can be created 
                      - is unending. I look forward to traversing that landscape 
                      for many years to come.
                  </p>
                  <p>
                      Coding is just one of many threads of passion in my 
                      life- I'm also a trumpet-playing, crazy-dancing member 
                      of a street band, and co-founded the School of HONK, a 
                      nonprofit alternative music school. Or if I'm not in 
                      a spectacle-raising mood, I'm just as happy curling up 
                      with my cat Matto and reading a book I've borrowed 
                      from the local library.
                  </p>
              </section>
          </section>
        </div>`
  );
};
    
const projectsRender = function() {
  
  console.log('aboutRender is running');
  $('main').html(
    `<div class="ultimate-container">
  
          <section class="img-container">
              <img src="imgs/doodle.png" alt="nz image placeholder" 
              class="nz-img">
          </section>
  
          <section class="content-container">
              
              <nav class="nav-container">
                  <ul class="nav-buttons">
                    <li class="projectsbut">
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
              <section>
                  <h2>My Work</h2>
                      
                  <h3>Here's what I've been up to...</h3>
              </section>
              <section class="projects-container">
              
                  <div class="project-box">
                      <img src="imgs/bookmark.png" class="project one" alt="screenshot of my bookmark app"/>
                  </div>
                  <div class="project-box">
                      <img src="imgs/quiz.png" class="project two"alt="screenshot of my bookmark app"/>
                  </div>
                  <div class="break"></div>
                  <div class="project-box">
                      <img src="imgs/quiz.png" class="project three" alt="screenshot of my bookmark app"/>
                  </div>
                  <div class="project-box">
                      <img src="imgs/bookmark.png" class="project four"alt="screenshot of my bookmark app"/>
                  </div>
              </section>
          </section>
        </div>`
  );
};
    
const contactRender = function() {
    
  console.log('contactrender running');
  $('main').html(
    `<div class="ultimate-container">
              
        <section class="img-container">
            <img src="imgs/doodle.png" alt="nz image placeholder" 
            class="nz-img">
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
            <h2>Let\'s collaborate!</h2>
            <form id="contact-me">
                <label for="name">Name</label>
                <input type="text" name="contact" id="name">
                <label for="email">Email</label>
                <input type="text" name="contact" id="email">
                <label for="message">Message</label>
                <textarea name="contact" id="message" rows="5"></textarea>
            </form>
        </section>
    </div>`
  );
};
    

  
  
export default {
  homeRender,
  aboutRender,
  projectsRender,
  contactRender
};