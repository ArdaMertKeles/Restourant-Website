import { configureStore } from "@reduxjs/toolkit";
import featuresCheckerReducer from './features';
import orderReducer from "./orderSlice";

export const store = configureStore({
    reducer: {
        featuresCheck: featuresCheckerReducer,
        order: orderReducer
    }
}) 