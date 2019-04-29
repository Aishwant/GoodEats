import React, { Component } from 'react';
import {Link} from 'react-router-dom';



export default class aboutUS extends Component {
  
  

        
          render() {
            
        
            return (

            <div>
            <div style={{backgroundImage: "url(" + "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:'100%',
            }}>
            <div class="container">
                

                <div className="container" style={{color:'white'}}>
                 
                 <div  style={{padding:'5% 10%'}}>
                 <div style={{textAlign:'center'}}>
                     <div>
                     <span class="glyphicon glyphicon-globe logo"></span> 
                     </div>
                     <div>
                     <h1>Our Values</h1>
                     <br/>
                     <h2>Mission</h2>

                     <h4>

                      <p>We don't just deliver, we carry the taste and love always going extra mile to feed your hunger.</p>

                      <p>
                      In meantime we sit with chefs from your favorite restaurants to come up with your dream menu that will arive fresh and full of flavour.
                      </p>
                      

                     </h4>


                     <h2>Vision</h2>

                      <h4>
                      <p>
                      We want to keep food delivery system simple and easy.
                      </p>

                      <p>
                      We want to bring all the food lovers in same place to work together for better food and better taste.
                      </p>

                      </h4>
       
                     </div>
    
                 </div>
                 <br/>
                 
                 {/* <div className="text-center">
              <h4>Know Mind Behind This</h4>
            
              <p>Aishwant Ghimire</p>
              <p>Andrew Jelson</p>
              <p>Jason Wells</p>
              <p>Jordan Kutz</p>
              <p>Madhav Prasad Koirala</p>
              </div> */}
            
                        
              </div>
              </div>
              </div>
              </div>
              <div>
                <h1 align="center"><u>Contact Us</u></h1>
                <div className="col-md-4 team-box" className = "borderless" style={{padding: '2%  15%'}}>
                  <div className="team-img thumbnail">
                    <div className="team-content" align="center">    
                      <h3>Jordan Kutz</h3>
                      <div className="border-team" align="center"></div>
                        <h4><p>Hi. I am the project manager for our group.
                            Email me at jkutz@go.olemiss.edu
                        </p></h4>
                        <br/>
                    </div>
                    <div className="team-content" align="center">    
                        <h3>Aishwant Ghimire</h3>
                        <div className="border-team" align="center"></div>
                        <h4><p>Hi. I am the database man for our group.
                            Email me at aghimire@go.olemiss.edu
                        </p></h4>
                        <br/>
                    </div>
                    <div className="team-content" align="center">     
                        <h3>Madhav Koirala</h3>
                        <div className="border-team" align="center"></div>
                        <h4><p>Hi. I have worked on the functionality of the project.
                            Email me at mkoirala@go.olemiss.edunpm
                        </p></h4>
                        <br/>
                    </div>
                    <div className="team-content" align="center">    
                        <h3>Jason Wells</h3>
                        <div className="border-team" align="center"></div>
                        <h4><p>Hi. I am worked on implementing some unique components of this project.
                            Email me at jpwells1@go.olemiss.edu
                        </p></h4>
                        <br/>
                    </div>
                    <div className="team-content" align="center">    
                        <h3>Andrew Jelson</h3>
                        <div className="border-team" align="center"></div>
                        <h4><p>Hi. I am the server guy for our project.
                            Email me at arjelson@go.olemiss.edu
                        </p></h4>
                        <br/>
                    </div>
                </div> 
            </div>
        </div>
        <br/>
        <br/>
        <br/>
                  <h2 style={{textAlign:'center'}}><u>What our customers say</u></h2>
                  <br/>
                  <div class="carousel slide text-center" >
           
                  <div role="listbox">
                      <div >
                      <h4>"Food ordering made very easy"</h4>
                      <h5 style={{fontStyle:'italic'}}>Pratap Bohara,Oxford, MS</h5>
                      <br/>
                      </div>
                      <div>
                      <h4>"Just Wow"</h4>
                      <h5 style={{fontStyle:'italic'}}>Jack Reacher, MS</h5>
                      <br/>
                      </div>
                      <div>
                      <h4>"This app is the best. I am so happy with the food!"</h4>
                      <h5 style={{fontStyle:'italic'}}>Denzel Washington, Olive Branch, MS</h5>
                      <br/>
                      </div>
                      <div>
                      <h4>"Bears. Beats. Battlestar Galactica"</h4>
                      <h5 style={{fontStyle:'italic'}}>Dwight Shrute, Schrute Farms</h5>
                      <br/>
                      </div>
                  </div>
                  </div>
                  </div>
              
                
            );
          }
        }

          
