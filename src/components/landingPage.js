import React, {Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
    return(
        <div style = {{width :'100%',margin : 'auto'}}> 
            <Grid className = "landing_grid"> 
    
                <Cell col ={12}>
                <img src="https://i.pinimg.com/originals/76/80/4f/76804f67ba38f85e4802d250e5b15504.jpg"
                    alt = "avatar"
                    className="image "/>  
                   <div className = "banner_text">
                  <h1>Web Freelancer</h1>
                     <hr/>
                     <div className="links_to_socials">
                      <a href="euue"  rel= "noopener noreferrer"  target="_blank">
                 
                          </a>
                        <a href="https://github.com/"  rel= "noopener noreferrer"  target="_blank">
                        <i class="fa fa-github" aria-hidden="true"></i>
                          </a>
                       <a href="https://www.freecodecamp.org/fcc8cf141d5-91ae-46b7-8216-9f48029b61e2"  rel= "noopener noreferrer"  target="_blank">
                      <i class="fa fa-free-code-camp" aria-hidden="true"></i>
                            </a>
                       <a href="https://www.linkedin.com/in/sinaye-sotatshe-581964183/"  rel= "noopener noreferrer"  target="_blank">
                       <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                      </a>
                      </div>
                    </div> 
                       
               </Cell>

           </Grid>
     </div>

        )
          }
        }
        
        export default LandingPage;