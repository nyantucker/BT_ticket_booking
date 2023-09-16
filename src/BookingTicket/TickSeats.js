import React, { Component } from 'react'
import { connect } from 'react-redux'
import Seats from './Seats'

export class TickSeats extends Component {
    renderSeat = () => { 
        let {seatArray} = this.props
        return seatArray.map((item,index) => {
            return <Seats index={index} item={item}/>
         })
     }
  render() {
    return (
      <div>
        <table className='table'>{this.renderSeat()}</table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        seatArray: state.bookingReducer.seatArray
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TickSeats)