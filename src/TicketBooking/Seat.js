import React, { Component } from 'react'

export default class Seat extends Component {
    renderSeatBox = () => { 
        return this.props.item.danhSachGhe.map((ghe,index) => { 
            return ghe.soGhe>0&&ghe.soGhe<=12?<td>{ghe.soGhe}</td>:<td> <input onChange={() => {this.props.handleAddSeat(ghe,ghe.soGhe)}} type="checkbox" className="seats" defaultValue="A12" /> </td>
         })
     }
  render() {
    return (
      <tr>
        <td>{this.props.item.hang}</td>
        {this.renderSeatBox()}
      </tr>
    )
  }
}
