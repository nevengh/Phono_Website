import React from 'react'
import cameraaa from './../images/camera.webp'
const SlideCard = () => {
  return (
    <div class="card ">
  <img src={cameraaa} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default SlideCard