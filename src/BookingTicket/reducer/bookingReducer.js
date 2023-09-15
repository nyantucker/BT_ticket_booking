import { CHANGE_FORM } from '../Constant/constant';
import data from '../Data/danhSachGhe.json'

const initialState = {
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
};

export let bookingReducer = (state=initialState,{type,payload})=>{
    switch(type) {
        default:
            return state;
    }
}
