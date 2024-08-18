/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header__logo">
          <img src="images/logo.png" alt="ProVital Logo" />
          <h1>ProVital</h1>
        </div>
        <nav className="app__header__nav">
          <ul>
            <li>
              <a href="#">List your practice</a>
            </li>
            <li>
              <a href="#">For Employers</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Speakers</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
          </ul>
        </nav>
        <div className="app__header__auth">
          <button className="app__header__auth__button">Login</button>
          <button className="app__header__auth__button">Sign Up</button>
        </div>
      </header>
      <main className="app__main">
        <div className="app__main_section" >
          <div className="app__main__hero_left">
            <div className='app__main__hero_left1'>
                <img src="images/img1.jpg" alt="" />
                <img src="images/img2.jpg" alt="" />
            </div>
            <div className='app__main__hero_left2'>
              <img src="images/img3.jpg" alt="" />
              <img src="images/img4.jpg" alt="" />
            </div>
          </div>
          <section className="app__main__hero">
          <div className="app__main__hero__content">
            <h2>Book an appointment with
            <span> lifestyle medicine </span> experts</h2>
            <p>Optimize your lifestyle and reverse chronic diseases.</p>
          </div>
          <div className="app__main__hero__search">
            <input type="text" placeholder="Condition, procedure, speciality..." />
            <input type="text" placeholder="City, state, or zipcode" />
            <input type="text" placeholder="Insurance carrier" />
            <button className="app__main__hero__search__button">Find now</button>
          </div>
        </section>
        </div>
        
        <section className="app__main__how-it-works">
          <h5>HOW IT WORKS</h5>
          <h3><span>Lifestyle as medicine:</span> The six pillars</h3>
          <div className="app__main__how-it-works__pillars">
            <div className="app__main__how-it-works__pillars__pillar">
              <div className="app__main__how-it-works__pillars__pillar__icon">
                <img src="images/pic1.png" alt="Nutrition Icon" />
              </div>
              <div className="app__main__how-it-works__pillars__pillar__content">
                <h4>Nutrition</h4>
                <p>Evidence supports the use of a whole food, plant-
                predominant diet to prevent, treat and reverse chronic
                illness.</p>
              </div>
            </div>
            <div className="app__main__how-it-works__pillars__pillar">
              <div className="app__main__how-it-works__pillars__pillar__icon">
                <img src="images/pic2.png" alt="Physical Activity Icon" />
                
              </div>
              <div className="app__main__how-it-works__pillars__pillar__content">
                <h4>Physical activity</h4>
                <p>Regular physical activity is key to managing weight,
                improving mental health, and reducing risk of chronic
                disease.</p>
              </div>
            </div>
            <div className="app__main__how-it-works__pillars__pillar">
              <div className="app__main__how-it-works__pillars__pillar__icon">
                <img src="images/pic3.png" alt="Restorative Sleep Icon" />
                
              </div>
              <div className="app__main__how-it-works__pillars__pillar__content">
                <h4>Restorative sleep</h4>
                <p>Consistent, quality
                function and physi</p>
              </div>
            </div>
            <div className="app__main__how-it-works__pillars__pillar">
              <div className="app__main__how-it-works__pillars__pillar__icon">
                <img src="images/pic4.png" alt="Stress Management Icon" />
              </div>
              <div className="app__main__how-it-works__pillars__pillar__content">
                <h4>Stress management</h4>
              </div>
            </div>
            <div className="app__main__how-it-works__pillars__pillar">
              <div className="app__main__how-it-works__pillars__pillar__icon">
                <img src="images/pic5.png" alt="Social Connection Icon" />
              </div>
              <div className="app__main__how-it-works__pillars__pillar__content">
                <h4>Social connection</h4>
              </div>
            </div>
            <div className="app__main__how-it-works__pillars__pillar">
              <div className="app__main__how-it-works__pillars__pillar__icon">
                <img src="images/pic6.png" alt="Substance Abuse Icon" />
              </div>
              <div className="app__main__how-it-works__pillars__pillar__content">
                <h4>Substance abuse</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
