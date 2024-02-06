import React, { Component } from 'react'
import img from "../assets/360_F_142503274_62c7EyaeXBIqBwyqJ3l46lFHuYy6w6Bt.jpg"
import img1 from "../assets/360_F_327476437_wUTmsvTLezc2fNh3UmqrOYE7xyWp1fvo.jpg"
import img2 from "../assets/wooden-cartoon-country-house-vector.jpg"

export default class Portfolio extends Component {
  render() {
    return (
      <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
      
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img2} class="card-img-top" alt="..."/>
      <div class="card-body">
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img1} class="card-img-top" alt="..."/>
      <div class="card-body">
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img2} class="card-img-top" alt="..."/>
      <div class="card-body">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img1} class="card-img-top" alt="..."/>
      <div class="card-body">

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
      </div>
    </div>
  </div>
</div></>
)}}