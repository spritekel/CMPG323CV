import React from 'react';
import Container from 'react-bootstrap/Container';
import Content from '../components/Content';
import Hero from '../components/Hero'

import unisaCert1 from '../assets/images/unisaCert1.png';
import unisaCert2 from '../assets/images/unisaCert2.png';
import unisaCert3 from '../assets/images/unisaCert3.png';
import sanren1 from '../assets/images/sanrenCert1.png';
import sanren2 from '../assets/images/sanrencert2.png';
import sasolHigh from '../assets/images/sasolMarks.png';
import recomSneaker from '../assets/images/recomSneak.png';
import recomAMS from '../assets/images/recomAMS.png';
import MeSneak from '../assets/images/MeSneak.jpeg';
import Squash from '../assets/images/Squash1.jpg';
import NWUMarks from '../assets/images/NWUMarks.png';
import Unisa from '../assets/images/Unisa.jpg';

function AboutPage(props){
    return(
        <div>          
            <Hero title={props.title} />
            <Content>
                <img src={sanren2} class="k-image-left" alt="TryHackMe"/>
                <img src={sanren1} class="k-image-left" alt="TryHackMe"/>
                <p>Thank you for the opportunity to present my CV to you.</p>
                <p>I am a hard-working and diligent student with a firm belief that
                through perseverance and attention to detail I can accomplish</p>
                <p>what most cannot. Information Security is what makes my heart
                skip a beat and I cannot wait to go above and beyond to be a</p>
                <p>part of your team.</p>
                <p>I participated in the SANREN cybersecurity challenge 2019
                placing 3rd overall at the finals with the team I had put together.</p>
                <p>I have since started to mentor the group for 2020 and have
                done so since the start of this academic year.</p>
            </Content>
            
            <u><h1 class="p">Employment History</h1></u>
            <Content>
            
                <p><h3 class="rainbow">1. Procurement and storeroom manager</h3></p>
                <img src={recomSneaker} class="k-image-right" alt="TryHackMe"/>
                <i>Sneaker snacks, Johannesburg</i>
                <p>Jan, 2017- Dec, 2017</p>
                <p>Position: Full time</p>
                <p>Responsibilities:</p>
                <p>1. Procurement</p>
                <p>2. Storeroom management</p>
                <p>3. Creating a company asset list of all machinery</p>
                <p>4. Maintaining and sending machinery CAD drawings for
                    projects</p>
            </Content>
            <Content>
            
                <p><h3 class="rainbow">2. Pallet construction</h3></p>
                <img src={MeSneak} class="k-image-right" alt="TryHackMe"/>
                <i>Self employed, Johannesburg</i>
                <p>Jul, 2016 - Dec, 2016</p>
                <p>Position: Full time</p>
                <p>Responsibilities:</p>
                <p>1. Reconstruction of pallets for Sneaker Snacks</p>
                <p>2. Overseeing two workers</p>
                <p>3. Invoicing</p>
                <p>Reason for leaving: Offered a full-time job at Sneaker Snacks</p>
            </Content>
            <Content>
                <p><h3 class="rainbow">3. Computer technician</h3></p>
                <img src={recomAMS} class="k-image-right" alt="TryHackMe"/>
                <i>AMS Rentals, Vanderbijlpark</i>
                <p>Jan, 2016 - Jun, 2016</p>
                <p>Position: Full time</p>
                <p>Responsibilities:</p>
                <p>1. Computer repairs</p>
                <p>2. Hardware and software troubleshooting</p>
                <p>3. CCTV installations</p>
                <p>4. Point of sales system install and maintenance - 4pos and pilot</p>
                <p>Reason for leaving: The computer part of AMS rentals had been
                sold</p>
            </Content>
            <Content>
                <p><h3 class="rainbow">4. Bartender</h3></p>
                <img src={Squash} class="k-image-right" alt="TryHackMe"/>
                <i>Vanderbijlpark Squash Court</i>
                <p>Jan, 2012 - Feb, 2016</p>
                <p>Position: Part-time</p>
                <p>Responsibilities:</p>
                <p>1. Organizing and looking after all the clients</p>
                <p>2. Serving at the bar</p>
            </Content>
            <u><h1 class="p">Education</h1></u>
            <Content>
                <p><h3 class="rainbow">1. North-West University</h3></p>
                <img src={NWUMarks} class="k-image-right" alt="TryHackMe"/>
                <i>Bsc in Information technology</i>
                <p>Feb, 2018 - Dec, 2020</p>
                <p>Potchefstroom</p>
                <p>Qualifications: Final year student presently</p>
                <p>Achieved distinctions in all first semester subjects 2020 with a</p>
                <p>81% average</p>
            </Content>
            <Content>
                <p><h3 class="rainbow">2. University of South Africa</h3></p>
                <img src={Unisa} class="k-image-right" alt="TryHackMe"/>
                <i>Information technology Diploma</i>
                <p>Jan, 2017 - Jan, 2018</p>
                <p>Vanderbijlpark</p>
                <p>Unfinished due to transferring to North-West University to begin</p>
                <p>my IT Degree</p>
            </Content>
            <Content>
                <p><h3 class="rainbow">3. University of South Africa</h3></p>
                <img src={unisaCert3} class="k-image-right" alt="TryHackMe"/>
                <i>Advanced information security</i>
                <p>Jul, 2017 - Dec, 2017</p>
                <p>A short course in advanced information security.</p>
            </Content>
            <Content>             
                <p><h3 class="rainbow">4. University of South Africa</h3></p>
                <img src={unisaCert2} class="k-image-right" alt="TryHackMe"/>
                <i>Applied information security</i>
                <p>Jan, 2017 - Jun, 2017</p>
                <p>A short course in applied information security.</p>
            </Content>
            <Content>
                <p><h3 class="rainbow">5. University of South Africa</h3></p>
                <img src={unisaCert1} class="k-image-right" alt="TryHackMe"/>
                <i>Introduction to Information Security</i>
                <p>Jul, 2016 - Dec, 2016</p>
                <p>A short course in introduction to information security.</p>
            </Content>
            <Content>
                <p><h3 class="rainbow">6. Sasolburg High School</h3></p>
                <img src={sasolHigh} class="k-image-right" alt="TryHackMe"/>
                <i>High School</i>
                <p>Jan, 2010 - Dec, 2015</p>
            </Content>
        </div>
    );
}
export default AboutPage;