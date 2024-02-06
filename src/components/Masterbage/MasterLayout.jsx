import React, { Component } from 'react'
import { Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'




export default class MasterLayout extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
        <Outlet/>
        </div>
        <Footer/>
    </div>
    )
  }
}
