import React, { Component } from 'react'
import style from "../Home/home.module.css"
import img from "../assets/images.png"

export default class Home extends Component {
  render() {
    return (
        <div className={style.container}>
      <div>
        <img src={img} className={style.img} />
        <h1 className={style.m} >welcome to my portfolio</h1>
        <p className={style.pa} ><span>Frontend developer</span></p>
        </div>
        </div>
    )
  }
}
