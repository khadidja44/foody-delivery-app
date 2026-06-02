import React from "react";
import Header from './Header';
import { Fragment } from 'react';
import './Home.css' ;
import prideimg from './../assets/prideimg.png'
import ingredientsimg from './../assets/ingredientsimg.png'
import Data from "../data";
import Carousel from 'react-bootstrap/Carousel';
import item1 from './../assets/item1.jpg'
import item2 from './../assets/item2.jpg'
import item3 from './../assets/item3.jpg'

const Home = ()=>{
    
const blogsitem = Data.map((item)=>{
    return(
        <div className="col-md-4" key={item.id}>
        <div className="box">
                <img src={item.img} alt={item.title} />  
                <h5>{item.title}</h5>
                <span>{item.time}</span>
                <h6>{item.price}$</h6>
                
        <button>
        <a href='#'>Order now</a>  
        </button>        
        </div>
        
        </div> )
        }
    )

    return(
        <Fragment>
            <Header/>
            <section>
            <div className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <h2>+354356</h2>
                        <h6>VIEWS</h6>
                        </div>
                        <div className="col-md-3">
                        <h2>+14576</h2>
                        <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                        <h2>+78980</h2>
                        <h6>CUSTOMERS</h6>
                        </div>
                        <div className="col-md-3">
                        <h2>2657657</h2>
                        <h6>LIKES</h6>
                        </div>
                    </div>
                </div> 
            </div>    
             </section>
            <section>
             <div className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={prideimg} title='img' alt="Fresh ingredients"></img>
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Every dish we prepare starts with locally sourced, organic produce and high-quality proteins. 
                            Our chefs work daily with farmers and artisans to bring you the freshest flavors, ensuring 
                            that each bite is packed with nutrition and taste. From our kitchen to your table, we never compromise on quality.</p>
                            <button>
                              <a href='#'>Learn more</a>  
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
            </section>
            <section>
             <div className="ingredients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>We make everything from scratch with love and care.</h2>
                            <p>Our process is simple: start with whole, natural ingredients and prepare them using traditional methods. 
                            No shortcuts, no artificial additives — just honest cooking that brings out the best in every ingredient. 
                            Come taste the difference that real food makes.</p>
                            <ul>
                                <li>Farm-fresh vegetables daily</li>
                                <li>Artisan bread baked on site</li>
                                <li>Hand-selected spices and herbs</li>
                            </ul>
                            
                            <button>
                              <a href='#'>Learn more</a>  
                            </button>
                        </div>
                        <div className="col-md-6">
                            <img src={ingredientsimg} title='img' alt="Fresh ingredients" />
                        </div>
                    </div>
                </div> 
            </div>
            </section>
          
            <section>
            <div className="paralex">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>When a man's stomach is full it makes no<br /> difference whether he is rich or poor.</h1>
                        <p>Good food brings people together, creating moments of joy and connection that transcend status or wealth. 
                            At Foody, we believe everyone deserves access to delicious, nourishing meals prepared with passion and integrity. 
                            Join us in celebrating the simple pleasure of eating well.</p>
                        </div>
                        <a href='#'>Watch Our Story</a>  
            
                 </div>        
             </div>  
             </div>     
            </section>
            <section>
            <div className="blogs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Explore Our Foods</h1>
                        <p>Discover our signature dishes, each crafted to bring you a unique taste experience. 
                        From hearty breakfasts to satisfying dinners, our menu features seasonal favorites and timeless classics. 
                        Whether you're craving something savory or sweet, we have something to delight every palate. 
                        Browse our selection and find your new favorite meal today.</p>
                        </div>   
                 </div>   
                 <div className="row">
                  {blogsitem}
                </div>     
             </div>  
             </div>     
            </section>
            <section>
            <div  className="slider">
            <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Testimonials</h2>
                        </div>
            </div>               
            <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                        <Carousel>
                <Carousel.Item>
               
                <img src={item1} alt="Customer review"/>
                    <Carousel.Caption>
                 
                    <p>"The food here is absolutely incredible! Fresh, flavorful, and made with real ingredients. 
                        I've become a regular customer and bring all my friends here."</p>
                        <span>Simab Dave - Web Designer</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={item2} alt="Customer review"/>

                    <Carousel.Caption>
                    
                    <p>"Finally a place that cares about what goes into their food. 
                        The quality is unmatched and the service is always friendly. Highly recommended!"</p>
                        <span>Michael Chen - Food Blogger</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={item3} alt="Customer review"/>

                    <Carousel.Caption>
                    <p>"Best meals I've had in years. You can really taste the difference when ingredients are fresh and 
                        prepared with care. Can't wait to come back!"</p>
                        <span>Sarah Johnson - Chef</span>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                        </div>
                        </div>
                        </div>
            </div> 
            </section>
            <section>
            <div  className="faq">
            <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Frequently Asked Questions</h2>
                        </div>
            </div>  
            <div className="row">
                        <div className="col-md-6 col-lg-6">
                        <h4> 
                            <span>~</span>
                            Is Foody bread really baked fresh each day?</h4>
                            <p>Yes! All our breads and pastries are baked fresh every morning on site. 
                            We never use day-old bread or frozen dough. Our bakers arrive before dawn to 
                            ensure you get the freshest loaves possible, made with organic flour and natural starters.</p>
                        </div>

                        <div className="col-md-6 col-lg-6">
                        <h4> 
                            <span>~</span>
                            Do you bake breads containing animal fats or products?</h4>
                            <p>We offer both traditional and plant-based options. Many of our breads are vegan-friendly, 
                            made only with flour, water, salt, and natural leavening. For our non-vegan recipes, we clearly 
                            label them so you can make informed choices. Feel free to ask our staff for recommendations!</p>
                        </div>
            </div>  
            <div className="row">
                        <div className="col-md-6 col-lg-6">
                        <h4> 
                            <span>~</span>
                            Can I order your products online?</h4>
                            <p>Absolutely! You can place orders for pickup or delivery directly through our website. 
                            We also offer catering for events and special occasions. Simply select your items, choose your pickup time, 
                            and we'll have everything ready for you.</p>
                        </div>

                        <div className="col-md-6 col-lg-6">
                        <h4> 
                            <span>~</span>
                            When are you opening a shop near me?</h4>
                            <p>We're expanding quickly! Currently we have locations in downtown and the westside, 
                            with two more shops opening in the coming months. Follow us on social media or subscribe 
                            to our newsletter for announcements about new locations and grand opening specials.</p>
                        </div>
            </div>            
            </div>
        
            </section>



        </Fragment>
       
    )
}

export default Home;