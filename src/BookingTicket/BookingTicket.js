import React, { Component } from 'react'
import TickForm from './TickForm'
import TickSeats from './TickSeats'
import TicketResult from './TicketResult'

export default class BookingTicket extends Component {
  render() {
    return (
      <div>
        <h1 className='p-3 display-2' style={{color:"white"}}>MOVIE SEAT SELECTION</h1>
      <div className='container py-5 display-5' style={{background:"#a76b2863"}}>
        <TickForm/>
        <TickSeats/>
        <TicketResult/>
      </div>
      </div>


    )
  }
}
