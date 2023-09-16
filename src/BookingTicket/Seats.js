import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_SEATS } from './Constant/constant'

export class Seats extends Component {
  renderSeatBox = () => { 
    return this.props.item.danhSachGhe.map((ghe,index) => { 
        return ghe.soGhe>0&&ghe.soGhe<=12?<td>{ghe.soGhe}</td>:<td> <input onChange={() => {this.props.handleAddSeat(ghe,ghe.soGhe)}} type="checkbox" className="seats" disabled={this.props.idvalid}/> </td>
     })
 }
  render() {
    console.log(this.props.idvalid);
    return (
      <tr>
        <td>{this.props.item.hang}</td>
        {this.renderSeatBox()}
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      idvalid: state.bookingReducer.idvalid
    }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    handleAddSeat: (item,soGhe) => { 
      let action={
        type: ADD_SEATS,
        payload: {
          item, soGhe
        }
      }
      dispatch(action)
     }
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Seats)