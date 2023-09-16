import { message } from 'antd';
import { ADD_SEATS, CHANGE_FORM, DADAT, START_SEATS_BOOK, UPDATE_RESULT } from '../Constant/constant';
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
        },
        idvalid: "disabled",
};
export let bookingReducer = (state=initialState,{type,payload})=>{
    switch(type) {
      case CHANGE_FORM: {
        let {value, name} = payload.target
        return {...state,[name]: value}
      }
      case START_SEATS_BOOK: {
        if (payload.seats<=0) {
          message.error("Vui lòng nhập số ghế")
          return {...state, idvalid:"disabled" }
        } else {
          message.success("Bắt đầu chọn ghế")
          return {...state, inputName: payload.name, inputSeats: payload.seats, idvalid:"" } 
        }
      }
      case ADD_SEATS: {
        let cloneSeatBook = [...state.seatBook]
        let cloneSeatResult= [...state.seatResult]
        
        if (cloneSeatBook.includes(payload.item)) {
          let index = cloneSeatBook.indexOf(payload.item)
          cloneSeatBook.splice(index,1)  
          cloneSeatResult.splice(index,1)  
        } else if ((cloneSeatBook.includes(payload.item))==false){
          cloneSeatBook.push(payload.item)
          cloneSeatResult.push(payload.soGhe)  
        }
        return {...state, seatBook: cloneSeatBook, seatResult: cloneSeatResult,}
      }
      case UPDATE_RESULT: {
        let cloneSeatBook = [...state.seatBook]
        let cloneSeatResult= [...state.seatResult]
        let inputName = [...state.inputName]
        let inputSeats = [...state.inputSeats]
        
        console.log(cloneSeatBook.length);
        console.log(inputSeats);

        if (cloneSeatBook.length==inputSeats) {
          message.success("Đã hiện thị kết quả")
          return {...state,
            result: {name:[...state.inputName], seatNum:[...state.inputSeats], seats:cloneSeatResult.toString()}}
        } else {
          message.error("Vui lòng chọn đúng số lượng ghế")
        }
      }
        default:
            return state;
    }
}
