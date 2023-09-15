import React, { Component } from 'react'

export default class TicketResult extends Component {
  render() {
    let {name,seatNum,seats} = this.props.result
    console.log(this.props);
    return (
      <div>
        <button onClick={() => {this.props.handleUpdateResult()}} className='btn btn-success'>Confirm Selection</button>

        <table className='table' style={{height:"200px",background:"grey"}}>
          <thead>
            <th>Name</th>
            <th>Number of Seats</th>
            <th>Seats</th>
          </thead>
          <tbody>
            <td>{name}</td>
            <td>{seatNum}</td>
            <td>{seats}</td>
          </tbody>
        </table>
      </div>
    )
  }
}
