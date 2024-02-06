import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from "../Navbar/navbar.module.css"

export default class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className={style.bcground} class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="home">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
