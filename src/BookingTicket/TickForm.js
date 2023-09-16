import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CHANGE_FORM, START_SEATS_BOOK } from './Constant/constant';

export class TickForm extends Component {
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

const mapStateToProps = (state) => {
    return {
      inputName:state.bookingReducer.inputName,
      inputSeats:state.bookingReducer.inputSeats,
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
      handleChangeForm: (e) => { 
        let action = {
          type: CHANGE_FORM,
          payload: e,
        }
        dispatch(action)
       },
      handleSeatBook: (name,seats) => { 
        let action = {
          type: START_SEATS_BOOK,
          payload: {
            name,
            seats,
          }
        }
        dispatch(action)
      }
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(TickForm);