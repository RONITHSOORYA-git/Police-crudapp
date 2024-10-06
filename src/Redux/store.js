import { configureStore } from "@reduxjs/toolkit";
import PoliceSlice from './Slice'

const store=configureStore({

    reducer:{
        policeReducer:PoliceSlice

    }

})

export default store