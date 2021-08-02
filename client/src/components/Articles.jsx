import React from "react";
import { isLoggedin, logout } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import CallBar from "./CallBar";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}




const Articles = () => {

  const forceUpdate = useForceUpdate();
  const handleLogout = async (e) => {
    await logout();
    forceUpdate();
  };
    return (
      <>
      <CallBar />
      {isLoggedin() ? <Navbar2 handleLogout={handleLogout} /> : <Navbar />}
        <div>
        <div className="mt-80" style={{padding: '0px', paddingRight: '8%', paddingLeft: '8%'}}>
          <h1 className="h1-black text-center">OUR LATEST ARTICLES <br />ON CARS</h1><img src="assets/img/Toyota-Corolla-Touring-Sports-2.jpg" style={{width: '100%', borderRadius: '20px', marginTop: '50px'}} />
          <div className="row mt-100">
            <div className="col-md-6">
              <h1 style={{color: '#0cbdff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt&nbsp;<br /></h1>
            </div>
            <div className="col-md-6">
              <p style={{color: 'var(--gray)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br /></p>
            </div>
          </div>
        </div>
        <section className="article-list mt-80" style={{paddingRight: '8%', paddingLeft: '8%'}}>
          <div className="row articles">
            <div className="col-sm-6 col-md-4 item">
              <div style={{padding: '10px', background: '#def4ff', borderRadius: '16px'}}><a href="#">
                  <div style={{borderRadius: '12px', width: '100%', height: '250px', background: 'url("assets/img/636647009.jpg") center / cover no-repeat'}} />
                </a>
                <h3 className="name">Used Cars For Sale in Garland, TX</h3>
                <p className="description">Transport is critical nowadays. Everyone needs to move from one place to another without any disturbance. In this respect, vehicles proved an excellent source for providing such facilities of transport..</p><a className="action" href="/Used Cars For Sale in Garland,TX"><i className="fa fa-arrow-circle-right" /></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <div style={{padding: '10px', background: '#def4ff', borderRadius: '16px'}}><a href="#">
                  <div style={{borderRadius: '12px', width: '100%', height: '250px', background: 'url("assets/img/2021-Hyundai-Sonata-N-Line-18.jpg") center / cover no-repeat'}} />
                </a>
                <h3 className="name">Used sedans for sale near me</h3>
                <p className="description">Dream of a car is not luxury nowadays, but rather it is a necessity of modern times. You have to run faster than time and lead a prosperous life.Therefore, you may be in search of Used sedans for sale near me.</p><a className="action" href="/Used sedans for sale near me"><i className="fa fa-arrow-circle-right" /></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <div style={{padding: '10px', background: '#def4ff', borderRadius: '16px'}}><a href="#">
                  <div style={{borderRadius: '12px', width: '100%', height: '250px', background: 'url("assets/img/421352-lexus-aura-sa-version-du-toyota-rav4-prime.jpg") center / cover no-repeat'}} />
                </a>
                <h3 className="name">Used lexus suv for sale near me</h3>
                <p className="description">A luxury automobile can serve as a status symbol for the customer. Companies wishing to transmit success may have people driving around expensive cars when visiting customer sites. The mid-life crisis...</p><a className="action" href="/Used lexus suv for sale near me"><i className="fa fa-arrow-circle-right" /></a>
              </div>
            </div>
          </div>
          <div className="row articles">
            <div className="col-sm-6 col-md-4 item">
              <div style={{padding: '10px', background: '#def4ff', borderRadius: '16px'}}><a href="#">
                  <div style={{borderRadius: '12px', width: '100%', height: '250px', background: 'url("assets/img/stock-Ford-F150Lightening02-company.jpg") center / cover no-repeat'}} />
                </a>
                <h3 className="name">Cheap used pickup trucks for sale near me</h3>
                <p className="description">There are so many cheap used pickup trucks for sale near me available. On this website, you will get to know about many of them. You can find here the cheapest pickups for you. People give information about their used trucks ...</p><a className="action" href="/Cheap used pickup trucks for sale near me"><i className="fa fa-arrow-circle-right" /></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <div style={{padding: '10px', background: '#def4ff', borderRadius: '16px'}}><a href="#">
                  <div style={{borderRadius: '12px', width: '100%', height: '250px', background: 'url("assets/img/Tempclipboard-image.png") center / cover no-repeat'}} />
                </a>
                <h3 className="name">used coupe for sale near me</h3>
                <p className="description">This is a website of the used coupe for sale near me in garland. Here you will find the best pricing of the used coupe which will shock you. This is a platform from where you can buy the best one on a low budget....</p><a className="action" href="/used coupe for sale near me"><i className="fa fa-arrow-circle-right" /></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 item">
              {/* <div style={{padding: '10px', background: '#def4ff', borderRadius: '16px'}}><a href="#">
                  <div style={{borderRadius: '12px', width: '100%', height: '250px', background: 'url("assets/img/2021-Suzuki-Across-1-850x445-1.jpg") center / cover no-repeat'}} />
                </a>
                <h3 className="name">Article Title</h3>
                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.</p><a className="action" href="#"><i className="fa fa-arrow-circle-right" /></a>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      <Footer />

      </>

    );
  };
  
  export default Articles;
  