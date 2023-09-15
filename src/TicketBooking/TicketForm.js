import React, { Component } from 'react'

export default class TicketForm extends Component {
  render() {
    let {inputName,inputSeats} = this.props
    return (
      <div>
        <div class="form-group d-flex">
              <label style={{width:"25%"}} for="">Name</label>
              <input name="inputName" onChange={this.props.handleChangeForm} value={inputName} style={{width:"25%"}} type="text" class="form-control" id="" placeholder="" />
              <label style={{width:"25%"}} for="">Number of Seats</label>
              <input name="inputSeats" onChange={this.props.handleChangeForm} value={inputSeats} style={{width:"25%"}} type="number" class="form-control" id="" placeholder="" />
            </div>
            <button onClick={()=>{this.props.handleSeatBook(inputName,inputSeats)}} className='btn btn-info m-3'>Start Selecting</button>
      </div>
    )
  }
}
