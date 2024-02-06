
import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MasterLayout from './components/Masterbage/MasterLayout'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Notfound from './components/notfound/Notfound'


const router= createBrowserRouter([{
  path:"",element:<MasterLayout/>,children:[
    {path:'',element:<Home/>},
    {path:"home",element:<Home/> },
  {path:"contact",element:<Contact/>},
   {path:"portfolio",element:<Portfolio/>},
  // { path:"*",element:<Notfound/>}
]
}])

export default class App extends Component {
  render() {
    return (
      <div>
      <RouterProvider router={router}/>
      </div>
    )
  }
}
