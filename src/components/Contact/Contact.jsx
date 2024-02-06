import React, { Component } from 'react'
import style from "../Contact/contact.module.css"

export default class Contact extends Component {
  render() {
    return (
      <div className={style.input}>
<div class="input-group mb-3" >
  <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Age</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">ُEmail</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
      </div>
    )
  }
}
