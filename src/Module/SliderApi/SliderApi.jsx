import React from 'react'
import './SliderApi.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SlideCard from '../SlideCard/SlideCard';

import { useState,useEffect } from 'react';
import axios from "axios"
const SliderApi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const responsive = {
    
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  

  return (
    <div>
      <Carousel
      infinite={true}
      showDots={true}
      responsive={responsive}>
        
        {
          posts.map((data,index) => {
            if (index < 7) {
              return(
              
                <div class="card slidCard m-auto" >
                    <img src={data.url} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">{data.title}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the .</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
              )
            }
            
          })
        }

  
</Carousel>
    </div>
  )
}

export default SliderApi