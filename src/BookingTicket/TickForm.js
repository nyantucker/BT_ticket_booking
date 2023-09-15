import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CHANGE_FORM } from './Constant/constant';

export class TickForm extends Component {

  render() {
    return
  }
}

const mapStateToProps = (state) => {
    return {
      // inputName:state.bookingReducer.inputName,
      // inputSeats:state.bookingReducer.inputSeats,
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {

    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(TickForm);