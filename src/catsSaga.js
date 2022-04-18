import { call, put, takeEvery } from "redux-saga/effects";
import { getAllCatSuccess } from "./catSlice";

function* getCats() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));

  const formatCats = yield cats.json();
  const newCat = formatCats.slice(0, 10);
  yield put(getAllCatSuccess(newCat));
}

function* catsSaga() {
  yield takeEvery("cats/getAllCatStart", getCats);
}

export default catsSaga;
