import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Nabar from './Navbar';
import { Navbar } from 'react-bootstrap';
function Home() {
    return (
 <div>
      <div><Nabar/></div>
        <main role="main">
          {/* Carousel */}
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Carousel indicators */}
        
            {/* Carousel inner */}
            <div className="carousel-inner">
              {/* First slide */}
              <div className="carousel-item active">
                
                {/* Carousel caption */}
                <div className="container">
                  
                  <div className="carousel-caption text-left">
                    <h1 style={{fontWeight:"660",}}>School</h1>
                    <br></br><br></br>
                    <p>Unlock your full potential in our innovative and nurturing learning community, where every student's journey is celebrated and empowered. Join us to embark on an extraordinary educational adventure filled with limitless possibilities.</p>
                    <br></br>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Expand your horizons with our school</a></p>
                  </div>
                </div>
              </div>
              {/* Pic */}
              <div className="carousel-item">
                <img
                  className="second-slide"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt="Second slide"
                />
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                  </div>
                </div>
              </div>
              {/* Pic */}
              <div className="carousel-item">
                <img
                  className="third-slide"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt="Third slide"
                />
                <div className="container">
                  <div className="carousel-caption text-right">
                    <h1>One more for good measure.</h1>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel controls */}
         
          </div>
  
          {/* Marketing messaging and featurettes */}
          <div className="container marketing">
            {/* Three columns */}
            <div className="row">
              <div className="col-lg-1">
                <img
                  className="rounded-circle"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
                <h2>Heading</h2>
                <p>Hi I'm under the water ,Please help me here too much raining,loloololoooo !</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-lg-2">
              <img
              className="rounded-circle" 
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
              />
              
                <h2>Heading</h2>
                <p>Hi I'm under the water ,Please help me here too much raining,loloololoooo !</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-lg-3">
                <img
                  className="rounded-circle"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
                <h2>Heading</h2>
                <p>Hi I'm under the water ,Please help me here too much raining,loloololoooo !</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>

            </div>
  
            {/* Featurettes */}
            <hr className="featurette-divider" />
  
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-5">
                <img src="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="1" width="580" height="380"/>
              </div>
            </div>
  
            <hr className="featurette-divider" />
  
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-5 order-md-1">
              <img src="https://images.unsplash.com/photo-1598981457915-aea220950616?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNjaG9vbCUyMFN0dWRlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="2" width="490" height="380"/>           
            </div>
            </div>
  
            <hr className="featurette-divider" />
  
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-5">
                <img src="https://images.unsplash.com/photo-1617721926586-4eecce739745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="3" width="580"  height="380"/>
              </div>
            </div>
  
            <hr className="featurette-divider" />
          </div>
  
          {/* Footer */}
          <footer className="container">
            <p className="float-right"><a href="#">Back to top</a></p>
            <p>&copy; 2017-2018 School  &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            <div className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
            <br></br>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
            </div>
          </footer>
        </main>
      </div>
    );
  }
  
  export default Home;
  