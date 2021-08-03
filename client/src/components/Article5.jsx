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

const Article5 = () => {
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
        <div className="mt-80" style={{padding: '0px'}}>
          <div style={{paddingRight: '8%', paddingLeft: '8%'}}>
            <h1 className="h1-black" style={{color: '#0cbdff'}}><strong>Used Coupe For Sale Near Me</strong><br /></h1><img src="assets/img/Tempclipboard-image.png" style={{width: '100%', borderRadius: '20px', marginTop: '50px'}} />
            <p className="mt-80">This is a website of the used coupe for sale near me in garland. Here you will find the best pricing of the used coupe which will shock you. This is a platform from where you can buy the best one on a low budget. You can find here your desired coupe. Many people add their vehicles here in the listing of us for sale. We have a lot of great vehicles on our website. We are the best platform of the used coupe for sale in Garland, TX. Here we are describing some of them-<br /><br /><br /></p>
            <div className="row mt-80">
              <div className="col-md-6">
                <h2 style={{fontSize: '24px'}}><strong>2019 Chevrolet Corvette</strong><br /></h2>
                <p style={{paddingRight: '20px', paddingLeft: '0px'}}><br />This is a grand sport 2dr coupe. This is available on this platform. The vehicle serves a great service. It has an automatic transmission. This vehicle has rear-wheel drive. The car has 2 seats. It can run 16 cities / 25 highways in a run.&nbsp;<br /><br />This vehicle has some top features and species. For comfort and convenience, this car had dual-zone automatic climate control. You can also use push-button start in this vehicle. The controls of this vehicle are on the steering wheel. There are no safety issues in this car. This car has stability control.&nbsp;<br /><br />For entertainment purposes, it has an auxiliary input jack and storage. And also a Bose premium 9-speaker system in the car. This is structured on an aluminum base. It also has Xenon LED park and turns signals and daytime running lamps also.&nbsp;<br /><br />The performance of this car is amazing. It uses only GM-approved tire and wheel combinations for safety issues. The durability of this vehicle.&nbsp;It includes Bluetooth streaming audio for music on phones. It also contains voice-activated technology which is an advantage for the car. This feature makes the car very high tech quality. But at a cheaper rate, you can get this vehicle here. <br /><br /><br /></p>
              </div>
              <div className="col-md-6">
                <div style={{width: '100%', height: '250px', background: 'url("assets/img/2019-chevrolet-corvette-zr1.jpg") center / cover no-repeat', borderRadius: '16px'}} />
                <div className="mt-30" style={{width: '100%', height: '250px', background: 'url("assets/img/2019-chevrolet-corvette-zr1.webp") center / cover no-repeat', borderRadius: '16px'}} />
              </div>
            </div>
          </div>
          <div className="mt-100" style={{background: '#0cbdff', paddingTop: '80px', paddingRight: '8%', paddingLeft: '8%', paddingBottom: '80px'}}><img src="assets/img/2020-Mercedes-AMG-GT-R-1200x800p%20(4).jpg" style={{width: '100%', borderRadius: '20px', marginBottom: '51px'}} />
            <h2><strong>2020 Mercedes-Benz AMG GT R</strong><br /></h2>
            <p><br />This is an R 2dr coupe for sports. This is a great time. The mileage area of this vehicle is 1321 miles. This car has the advantage of horsepower. It is 577 horsepower. It can run out to 15 city / 20 highways. As like every sports car it also has 2 seats. This sports car has a great gas engine. The exterior color of this vehicle is AMG Green Hell Mango. The interior part is of various colors like Black Nappa/DINAMICA Premium Leather/Sueded Microfiber.&nbsp;<br /><br />This vehicle contains automated manual transmission. It also has a rear-wheel driving system. This car has a keyless start. The navigation system and power driver seats are two convenient features of this vehicle. For the comfort zone, it has multi-zone AC. This vehicle contains rain-sensing wipers which is an advantage for rainy days. This car also has steering wheel audio controls.&nbsp;<br /><br />For entertainment purposes, it has auxiliary audio input and smart device integration. In the exterior and engine part, it has automatic headlights. It’s a very beneficial feature for a vehicle. The car runs out of turbochargers. For safety issues, its tire pressure van is monitored. The stability control and security system are great for this car. Although it’s a great car at a cheaper rate. <br /><br /><br /></p>
            <div className="mt-80" /><img src="assets/img/2018_dodge_challenger_coupe_srt-hellcat_fq_oem_1_1600.jpg" style={{width: '100%', borderRadius: '20px', marginBottom: '51px'}} />
            <h2><strong>2018 Dodge Challenger</strong><br /></h2>
            <p><br />This sports car has a great effect on the challenging world of sports. This vehicle is a great choice for challenging the game. Choosing this vehicle can make you win anyways. This is an R/T Scat Pack 2 dr coupe. Though its horsepower is a little bit less which is 485. But still, it can be the game changer vehicle for its other great features. The exterior color of this car is Redline Red Tri-Coat Pearl.&nbsp;<br /><br />On the other hand, the interior part is black cloth colored. This sports car is larger than others. It contains 5 seats. It can run 14 cities and 23 highways in a single run. This is also a rear-wheel driving car. This vehicle is an automatic transmission car that uses a gas engine. For comfort, this car also uses multi-zone AC and a power driver seat. This car has a GPS navigation system. It's a great feature. The steering wheel has audio controls.&nbsp;<br /><br />For entertainment purposes, it has audio input and a premium sound system. Usually, not all sports cars have this feature. But this vehicle has both audio input and a sound system. Another interesting feature of this car is the WiFi hotspot which is very rare in this type of vehicle. For safety issues, it has a red parking aid. This will prevent any parking safety issues.&nbsp;The exterior part has the amazing feature of the heated mirror. This is a great thing about this vehicle. Overall this car has a lot of features in it but it is listed for sale here at a very low range. It’s a great opportunity to buy this. <br /><br /><br /></p>
          </div><img src="assets/img/ebc8174a3135fe7828d0d8e06a7e81d2.jpg" style={{width: '100%', borderRadius: '0px'}} />
          <div style={{paddingRight: '8%', paddingLeft: '8%'}}>
            <h2 className="mt-80"><strong>2020 Mercedes-Benz C-Class</strong><br /></h2>
            <div>
              <p><br />The 2020 Mercedes-Benz-C-Class is a C 300 2dr coupe. It’s a great sports car but does not serve fast service like other cars. But in comparison of features, it serves the best of it.&nbsp;This car has 255 horsepower. The color of this vehicle is very eye-catching. It attracts everyone’s attraction. The exterior color is Brilliant Blue Metallic. And as a great combination, the interior color is Black Leatherette. It can run 22 cities and 31 highways in a run. Which is far better in comparison to its horsepower.<br /><br />&nbsp;This is a small car with 4 seats. This is a rear-wheel driving and automatic transmission-based car. It uses a gas engine. For comfort, it contains dual-zone front automatic air conditioning. It also has a power tilt/ telescoping steering column. It has an airbag occupancy sensor and low tire pressure warning method for safety issues.&nbsp;<br /><br />This car is very aware of its safety system. The alternator is 150 AMP. It also has a feature of driver footrest. This is a great feature in the care of the person who will drive the car for a long time. It has a driver and passenger knee airbag system. It’s also for the comfort zone of everyone. The electric power of this car assists speed-sensing steering. Battery maintenance is 74 AMP/hour. The ratio is 3.07 Axle.&nbsp;Airbag occupancy sensor gives great service in this vehicle. One more amazing part of this vehicle is air filtration. Though it has an analog appearance all the features are very digital and luxurious. The door handles of this vehicle are body-colored. <br /><br /><br /></p>
            </div>
          </div>
        </div>
        <div className="row mt-100" style={{marginLeft: '8%', marginRight: '8%'}}>
          <div className="col-md-6"><img src="assets/img/2016_porsche_cayman_r34_fe_216161_717.jpg" style={{width: '100%', borderRadius: '14px'}} />
            <h2><br /><strong>2016 Porsche Cayman</strong><br /><br /></h2>
            <p><br />This is a small 2dr coupe. For being small it has 2 seats in it. As we all know small cars give a long run. This car has a mileage of 20744 miles. It can run 20 cities and 30 highways in a single run. Though this is also a rear-wheel driving car. But it has an automatic manual transmission system.&nbsp;<br /><br />The exterior color of this vehicle is Guards Red. And according to the color match it has got a Black Leather color in the interior part. It has all the safety features of Navigation/Navi/GPS in it. There will be no issue related to safety concerns.&nbsp;This car has a keyless entry system but there is a twist in it. The keyless entry is remote-based. For entertainment like all the cars it also has auxiliary audio input and also a Bluetooth connection.&nbsp;<br /><br />The engine and exterior part got heated door mirrors. It’s like an advantage. It also has a system of low-tire pressure warnings. The tire pressure can be monitored. And the electronic stability controls are great to use. The security system is strict enough. This car has some comfort zones like bucket seats, passenger airbags, leather steering wheel, adjustable steering wheel, etc.&nbsp;<br />It’s a great choice to ride this car for a long journey. This vehicle will make your journey more pleasant. Wheel locks are a great security system for this car. This feature is genuinely a great choice. This car gives the feel of a luxurious vehicle in your budget. <br /><br /><br /></p>
          </div>
          <div className="col-md-6"><img src="assets/img/ford%20mustang.jpg" style={{width: '100%', borderRadius: '14px'}} />
            <h2><br /><strong>2020 Ford Mustang</strong><br /><br /><br /></h2>
            <p><br />2020 Ford Mustang is a premium car. It’s a very shiny vehicle that is very demanding. Everyone falls in love with the design of this car. All the features and spaces are amazing for this car. The model of this vehicle is GT Premium 2dr coupe. This is a family-type car. For that reason, it has 4 seats in it.&nbsp;<br /><br />The vehicle is automatically transmitted. It has a mileage of 11443 miles. The exterior color of this car is shadow black. It is very shiny from the outside. This color has increased the beauty of the look. Along with the exterior color, the interior color is ebony leather. It suits both the inside and outside.&nbsp;<br /><br />It has the convenience of adaptive cruise control. This car also allows keyless entry. The front seats are both heated and cooled.&nbsp;For entertainment reasons it has an auxiliary audio input with a premium sound system. Both of them are connected. It has also smart device integration and also wifi hotspot in the car. For safety motives the stability controls are great. Pre-Collision assist with pedestrian detection and rear parking aid are two other facilities of the safety issues.<br />This car has got automatic headlines. Besides, the heated mirrors are also a great advantage. Besides being heated mirrors they are also integrated turn signal mirrors. The brake assist and tire pressure monitoring system are the greatest features of this car. This is a great vehicle for a family tour indeed. <br /><br /><br /></p>
          </div>
        </div>
        <div style={{paddingRight: '8%', paddingLeft: '8%'}}>
          <div className="row mt-80">
            <div className="col-md-6">
              <h2 style={{fontSize: '24px'}}><strong>2016 Honda Accord</strong><br /><br /></h2>
              <p style={{paddingRight: '20px', paddingLeft: '0px'}}><br />It is a model EX-L 2dr coupe. This vehicle has a great horsepower of 185 by which it can run 26 cities and 35 highways in a run. This car uses gas engines. It has 5 seats including the driving seat.&nbsp;<br /><br />This vehicle is a little bit different from other cars. Because it has a front-wheel driving system in it. The car gives 50299 mileages. The exterior color of this car is white orchid pearl color. It’s a very standard color indeed. This color makes the car looks so adorable and expensive. The interior part contains two types of color. The colors are Black and Ivory leather. It makes a combine inside the car for making the vehicle smart looking.&nbsp;<br /><br />This car also allows keyless entry. This is a very adorable vehicle that has steering wheel audio controls. It makes the vehicle more adhesive. This has a power driver seat and also multi-zone ac for the comfort zone.&nbsp;For entertainment purposes, it contains auxiliary audio input with a premium sound system. Smart device integration is also placed in this car. This beautiful vehicle has a tire pressure warning system for safety issues. And the most unique part of this smart car is it has a rearview camera for the safety of both car and passengers.&nbsp;<br />The exterior side has got automatic headlights for more smartness. The security system is very strict to prevent any privacy issues. This amazing car has got great stability control among all the features. The mirrors are heated and also have an integrated turn signal. In a word, it is a luxurious package on your low budget. You can get the car as you have got a golden opportunity to fulfill your dream.<br /><br /><br /></p>
            </div>
            <div className="col-md-6">
              <div style={{width: '100%', height: '250px', background: 'url("assets/img/Honda-Accord-Touring-2016_024fr.jpg") center / cover no-repeat', borderRadius: '16px'}} />
              <div className="mt-30" style={{width: '100%', height: '250px', background: 'url("assets/img/2016-Honda-Accord-Coupe-official-38.jpg") center / cover no-repeat', borderRadius: '16px'}} />
            </div>
          </div>
        </div>
        <div className="mt-100" style={{background: '#0cbdff', paddingTop: '80px', paddingRight: '8%', paddingLeft: '8%', paddingBottom: '80px'}}><img src="assets/img/7d881697a81dbd861112e01c5ea073b32961a40e.jpg" style={{width: '100%', borderRadius: '20px', marginBottom: '51px'}} />
          <h2><strong>2009 Chevrolet Corvette</strong><br /><br /></h2>
          <p><br />It is a car looking like a sports car. But you can take a tour by this car enjoying your journey. It is a Z06 2dr coupe. It has a great mileage of 38548 miles. The car is very good-looking. So the color selections are also great for this car.&nbsp;<br />The exterior color of this car is Blade Silver Metallic. The metallic colors make the car very shiny and attractive. It gives a new look to the car. To combine the exterior color this vehicle has used Ebony Premium Leather inside it. The interior part is very well decorated. Anyone will be impressed by the look of the vehicle.&nbsp;<br /><br />This car has a difference in manual transmission from other vehicles. The horsepower of this car is very high which is 505. As like a sports car this coupe also has 2 seats including the driving seat. It can run to 15 cities and 24 highways. For comfort zones, this vehicle has the feature of keyless entry. And it has a Bluetooth connection in the car to entertain the rider.<br /><br />This car has a great heads-up display feature for safety issues. And the interesting part is this car has no pressure on the tire. Because it is not too heavy to give pressure on the tire. This is an advantage for the vehicle. This is also a cheap price range car for sale which is used. But gives a long-lasting service to the buyer. <br /><br /><br /></p>
        </div>
      </div>
         <Footer />

         </>


    );
  };
  
  export default Article5;
  