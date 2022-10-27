import React from 'react';
import AboutTeamMember from '../Components/AboutComponent/AboutCards/AboutTeamMember';
import Footer from '../Components/Shared/Footer/Footer';

function AboutUs() {
  return (
    <section>
        <div>
            <p class=""> Know your bus is India’s largest online bus ticketing platform that has transformed bus travel 
                in the country by bringing ease, convenience and safe travel to many of us. Founded in 2019, 
                Know Your Bus is part of India’s leading online travel company 
                MakeMyTrip Limited (NASDAQ: MMYT). 
                By providing widest choice, superior customer service, lowest prices and unmatched benefits, 
                redBus has served over 18 million customers. redBus has a global presence with operations 
                across Indonesia, Singapore, Malaysia, Colombia and Peru apart from India. 
                </p>
               
           <AboutTeamMember />
           <AboutTeamMember />
           <AboutTeamMember />
           <AboutTeamMember />
        </div>
    </section>
    
  )
}

export default AboutUs
