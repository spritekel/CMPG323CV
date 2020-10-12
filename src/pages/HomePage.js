import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';


function HomePage(props){
    
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
            <Carousel />
        <div class="centreAll">
            <u><h2>My skills</h2></u>
            <h3>Complex problem solving:</h3>
            <div class="progress">
            <div class="bar"></div >
            <div class="percent">70%</div >
            </div>

            <h3>Linux Administration:</h3>
            <div class="progress">
            <div class="bar"></div >
            <div class="percent">70%</div >
            </div>
            
            <h3>Communication:</h3>
            <div class="progress">
            <div class="bar1"></div >
            <div class="percent">100%</div >
            </div>

            <h3>Attention to detail:</h3>
            <div class="progress">
            <div class="bar2"></div >
            <div class="percent">80%</div >
            </div>

            <h3>Tech-savvy:</h3>
            <div class="progress">
            <div class="bar1"></div >
            <div class="percent">100%</div >
            </div>

            <h3>Python:</h3>
            <div class="progress">
            <div class="bar3"></div >
            <div class="percent">90%</div >
            </div>

            <h3>C++:</h3>
            <div class="progress">
            <div class="bar"></div >
            <div class="percent">70%</div >
            </div>

            <h3>C#:</h3>
            <div class="progress">
            <div class="bar2"></div >
            <div class="percent">80%</div >
            </div>

            <h3>Ruby:</h3>
            <div class="progress">
            <div class="bar4"></div >
            <div class="percent">40%</div >
            </div>

            <h3>Java:</h3>
            <div class="progress">
            <div class="bar2"></div >
            <div class="percent">80%</div >
            </div>

            <h3>SQL:</h3>
            <div class="progress">
            <div class="bar5"></div >
            <div class="percent">60%</div >
            </div>

            <h3>JavaScript:</h3>
            <div class="progress">
            <div class="bar6"></div >
            <div class="percent">50%</div >
            </div>
        </div>
        </div>

    );
}
export default HomePage;