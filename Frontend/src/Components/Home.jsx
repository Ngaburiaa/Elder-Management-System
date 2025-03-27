import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import "../home.css"


function Home() {
  return (
    <div className='container'>
      <header className="header">
        <div className="header-content">
              <Outlet />
          <nav>
            <ul className="nav-list">
              <li><Link to="/" className="nav-link" title="Go back to the homepage of the Elderly Management System">Home</Link></li>
              <li><Link to="/features" className="nav-link" title="Discover the key features of our elderly care platform">Features</Link></li>
              <li><Link to="/how-it-works" className="nav-link" title="Learn about the functionalities and workflows in the elderly management system">How It Works</Link></li>
              <li><Link to="/about-us" className="nav-link" title="Understand the mission and values driving our elderly care service">About Us</Link></li>
              <li><Link to="/contact-us" className="nav-link" title="Reach out to us for assistance, inquiries, or support">Contact Us</Link></li>
              <li><Link to="/login" className="nav-link" title="Login to your account and manage elderly care details">Login</Link></li>
              <li><Link to="/SignUp" className="nav-link" title="Sign up to start managing elderly care and access our platform">Sign Up</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <section className="hero">
        <h1 className="hero-title">Welcome to Our Elderly Management System</h1>
        <h3 className="hero-subtitle">Where seniors thrive and families find peace of mind</h3>
        <img src="https://thumbs.dreamstime.com/b/chinese-seniors-socializing-public-park-near-forbidden-city-senior-people-playing-cards-jingshan-beijing-174643622.jpg?w=768" alt="Seniors socializing in park" className="hero-image" />
      </section>

     

    

   
    <section class="hero">
        <div class="container">
            <h1>Empowering Families to Care for Their Loved Ones</h1>
            <p>Comprehensive tools for elderly care management, health monitoring, and family collaboration.</p>
            <div class="cta-buttons">
                <a href="#" class="btn primary">Get Started</a>
                <a href="#" class="btn secondary">Learn More</a>
            </div>
        </div>
    </section>

  
    <section class="introduction">
        <div class="container">
            <h2>Welcome </h2>
            <p>Our platform is dedicated to simplifying elderly care by providing a centralized hub for health tracking, care planning, and communication. Whether you're a caregiver, family member, or senior citizen, ElderCare is here to make life easier.</p>
        </div>
    </section>

   
    <section class="features">
        <div class="container">
            <h2>Our Features</h2>
            <div class="feature-blocks">
                <div class="feature">
                    {/* <img src="icon-health-monitoring.png" alt="Health Monitoring"> */}
                    <h3>Health Monitoring</h3>
                    <p>Track vital signs, medication schedules, and health reports in real time.</p>
                </div>
                <div class="feature">
                    {/* <img src="icon-care-plans.png" alt="Personalized Care Plans"> */}
                    <h3>Personalized Care Plans</h3>
                    <p>Create and manage custom care plans tailored to individual needs.</p>
                </div>
                <div class="feature">
                    {/* <img src="icon-alerts.png" alt="Real-Time Alerts"> */}
                    <h3>Real-Time Alerts</h3>
                    <p>Receive alerts for missed medications, irregular health readings, and emergencies.</p>
                </div>
                <div class="feature">
                    {/* <img src="icon-family-collaboration.png" alt="Family Collaboration"> */}
                    <h3>Family Collaboration</h3>
                    <p>Keep family members informed and involved with shared access to care updates.</p>
                </div>
                <div class="feature">
                    {/* <img src="icon-scheduling.png" alt="Appointment Scheduling"> */}
                    <h3>Appointment Scheduling</h3>
                    <p>Plan doctor visits, therapy sessions, and other appointments with ease.</p>
                </div>
                <div class="feature">
                    {/* <img src="icon-resource-center.png" alt="Resource Center"> */}
                    <h3>Resource Center</h3>
                    <p>Access educational materials and tips for effective elderly care.</p>
                </div>
            </div>
        </div>
    </section>

   
    <section class="how-it-works">
        <div class="container">
            <h2>How It Works</h2>
            <div class="steps">
                <div class="step">
                    {/* <img src="step1.png" alt="Create an Account"> */}
                    <h3>Create an Account</h3>
                    <p>Sign up and set up profiles for the senior and their caregivers.</p>
                </div>
                <div class="step">
                    {/* <img src="step2.png" alt="Set Up Health Tracking"> */}
                    <h3>Set Up Health Tracking</h3>
                    <p>Input health details, medication schedules, and care preferences.</p>
                </div>
                <div class="step">
                    {/* <img src="step3.png" alt="Monitor and Collaborate"> */}
                    <h3>Monitor and Collaborate</h3>
                    <p>Use real-time dashboards and alerts to stay informed and connected.</p>
                </div>
                <div class="step">
                    {/* <img src="step4.png" alt="Adjust and Plan"> */}
                    <h3>Adjust and Plan</h3>
                    <p>Update care plans and schedules as needs evolve.</p>
                </div>
            </div>
        </div>
    </section>

  
    <section class="call-to-action">
        <div class="container">
            <h2>Join Our Caring Community</h2>
            <p>Sign up today and experience peace of mind with ElderCare’s comprehensive management tools.</p>
            <div class="cta-buttons">
                <a href="#" class="btn primary">Sign Up Now</a>
                <a href="#" class="btn secondary">Explore Features</a>
            </div>
        </div>
    </section>


   
<section class="testimonials">
    <div class="container">
        <h2>What Our Users Say</h2>
        <div class="testimonial-blocks">
            <div class="testimonial">
                {/* <img src="user1.jpg" alt="User 1"> */}
                <p>"The Elderly Management System has been a lifesaver for my family. It helps us monitor our loved one's health and schedule with ease."</p>
                <h4>Jane Doe</h4>
            </div>
            <div class="testimonial">
                {/* <img src="user2.jpg" alt="User 2"> */}
                <p>"As a caregiver, this platform has made my job so much easier. It's user-friendly and provides all the tools I need in one place."</p>
                <h4>John Smith</h4>
            </div>
            <div class="testimonial">
                {/* <img src="user3.jpg" alt="User 3"> */}
                <p>"I love how this system provides real-time updates. It's given me peace of mind knowing my parents are well cared for."</p>
                <h4>Emily Johnson</h4>
            </div>
        </div>
    </div>
</section>


<footer>
    <div class="container">
        <p>&copy; 2025 Elderly Management System. All rights reserved.</p>
        <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Support</a></li>
        </ul>
    </div>
</footer>


   
  



    </div>
  );
}

export default Home;


