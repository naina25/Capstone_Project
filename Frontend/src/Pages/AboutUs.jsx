import React from 'react'
import AboutTeam from '../Components/AboutUsComponent/AboutTeam'
import image1 from "../assets/aboutusImgs/image1.jpg";
import image2 from "../assets/aboutusImgs/image2.jpg";
import image3 from "../assets/aboutusImgs/image3.jpg";
function AboutUs() {
  return (
    <div className='about-us-section'>
        <div>
        <p className="about-us-heading">About Us</p>
        <p className="about-us-content-body">Know Your Bus is India’s finest online bus ticketing platform that has transformed bus travel in the country by bringing ease and convenience to millions of Indians who travel using buses. Founded in 2006, redBus is part of India’s leading online travel company MakeMyTrip Limited (NASDAQ: MMYT). By providing widest choice, superior customer service, lowest prices and unmatched benefits, redBus has served over 18 million customers. redBus has a global presence with operations across Indonesia, Singapore, Malaysia, Colombia and Peru apart from India.</p>
        </div>
            <AboutTeam imageurl={image1} text={"Priyanshi Sharma, Chief Executive Officer"} text2={" Priyanshi Sharma has been Chief Executive Officer of Know Your Bus since June 2018. Prior to redBus. She served as an Executive Vice President of Edge India (Naukri group), heading two group businesses namely Shiksha.com and Jeevansathi.com. She’s also worked as General Manager of Marketing and Innovation at Airtel and has also had multiple roles across Marketing, Brand Management and Sales at Hindustan Unilever. Priyanshi has completed her MBA from IIM Calcutta and also holds an Honours degree in Production Engineering from Mumbai University."}/>
            <AboutTeam imageurl={image2} text={"Shivam Singh, Chief Technology Officer"} text2={" Shivam Singh serves as Chief Technology Officer at Know Your Bus. Shivam plays an integral role in setting the company’s strategic direction, development and future growth. At Know Your Bus, he leads effective delivery of scalable systems to the customers, agents and bus operators by incorporating the latest technology. A tech enthusiast, Shivam comes with over 18 years of extensive experience in building scalable and high-performing products across telecom, internet and mobile ecommerce domains. Shivam strongly believes that hard work and commitment can overcome the barriers to success. He completed BE in Mechanical Engineering from Madras University and loves sports, movies, TV and music."}/>
    </div>
    
  )
}

export default AboutUs