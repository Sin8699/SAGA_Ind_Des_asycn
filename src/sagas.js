import { takeLatest, call, put,all,takeEvery } from "redux-saga/effects";


export function* helloSaga(){
    console.log("HELLO SAGA");
}

export function* onIncrement(){
    console.log("INCREMENT_SAGA");
    //yield put({ type:"INCREMENT"});
}
export function* onDescrement(){
  console.log("DECREMENT_SAGA");
  //yield put({ type:"INCREMENT"});
}


const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
    console.log("INCREMENT_SAGA_ASYNC");
    yield delay(3000);
    yield put({ type: 'INCREMENT' })
  }
  
  
  export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  }
  export function* watchIncrement() {
    yield takeLatest('INCREMENT', onIncrement);
  }
  export function* watchDescrement() {
    yield takeLatest('DECREMENT', onDescrement);
  }

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrement(),
      watchDescrement(),
      watchIncrementAsync()
    ])
  }