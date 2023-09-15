import React, { Component } from 'react'
import Seat from './Seat'

export default class TicketSeat extends Component {
    renderSeat = () => { 
        let {seatArray} = this.props
        return seatArray.map((item,index) => {
            return <Seat index={index} seatArray={this.props.seatArray} item={item} handleAddSeat={this.props.handleAddSeat}/>
         })
     }
  render() {
    // console.log(this.props);
    return (
      <div>
      <table className='table'>{this.renderSeat()}</table>
      </div>
      )
  }
}
