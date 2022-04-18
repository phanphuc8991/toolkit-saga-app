import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./catSlice";
import createSagaMiddleware from "redux-saga";
import catsSaga from "./catsSaga";
const rootReducer = {
  cats: catReducer,
};
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(catsSaga);

export default store;
