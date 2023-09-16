import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UPDATE_RESULT } from './Constant/constant';

export class TicketResult extends Component {
  render() {
    let {name,seatNum,seats} = this.props.result
    return (
        <div className='py-3'>
        <button onClick={() => {this.props.handleUpdateResult()}} className='btn btn-success'>Confirm Selection</button>

        <table className='table mt-5' style={{height:"200px",background:"white"}}>
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

const mapStateToProps = (state) => {
    return {
        result: state.bookingReducer.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateResult: () => {
            let action = {
                type: UPDATE_RESULT,
            }
            dispatch(action)
         }
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(TicketResult)