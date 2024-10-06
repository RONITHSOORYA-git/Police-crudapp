import { createSlice } from "@reduxjs/toolkit";

const PoliceSlice=createSlice({
    name:'keralapolice',
    initialState:{
        police:[]
    },
    reducers:{
        addComplaint(state,action){
            state.police.push(action.payload)
            console.log(action.payload)
        },
    
        deleteComplaint(state,action){

            state.police=state.police.filter(item=>item.id!=action.payload)

        },
        editComplaint(state,action){
state.police=state.police.filter(item=>item.id!=action.payload.id)
            state.police.push(action.payload)
           console.log(action.payload);
           


        }
        
    }
})

export default PoliceSlice.reducer
export const{addComplaint,deleteComplaint,editComplaint}=PoliceSlice.actions