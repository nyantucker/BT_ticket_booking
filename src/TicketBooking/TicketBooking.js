import React, { Component } from 'react'
import TicketForm from './TicketForm'
import TicketSeat from './TicketSeat'
import TicketResult from './TicketResult'
import data from '../Data/danhSachGhe.json'

export default class TicketBooking extends Component {
    state = {
        inputName:"",
        inputSeats:"",
        seatArray : data,
        seatBook: [],
        seatResult: [],
        result: {
          name:"",
          seatNum:"",
          seats:"",
        }
    }
    handleChangeForm = (e) => {
      let {value, name} = e.target
      this.setState({
          [name]: value,
      })
    }
    handleSeatBook = (name,seats) => {
      this.setState({
        inputName: name,
        inputSeats: seats,
      })
    }
    handleAddSeat = (item,soGhe) => {
      let cloneSeatBook = this.state.seatBook
      let cloneSeatResult= this.state.seatResult
      cloneSeatBook.push(item)
      cloneSeatResult.push(soGhe)
      this.setState({
        seatBook: cloneSeatBook,
        seatResult: cloneSeatResult,
      })
      console.log(item);
      console.log(cloneSeatBook);
      console.log(cloneSeatResult);
     }
     handleUpdateResult = () => { 
      console.log("a");
      let cloneSeatResult=this.state.seatResult
      this.setState({
        result: {
          name:this.state.inputName,
          seatNum:this.state.inputSeats,
          seats:cloneSeatResult.toString(),
        }
      })
    }
  render() {
    return (
      <div className='container'>
        <TicketForm handleSeatBook={this.handleSeatBook} handleChangeForm={this.handleChangeForm} inputName={this.state.inputName} inputSeats={this.state.inputSeats}/>
        <TicketSeat seatArray={this.state.seatArray} handleAddSeat={this.handleAddSeat}/>
        <TicketResult handleUpdateResult={this.handleUpdateResult} result={this.state.result}/>
      </div>
    )
  }
}
