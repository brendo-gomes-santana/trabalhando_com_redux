import axios from "axios";
import { all, takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { fetchUsersSuccess, fetchUserFailure } from "./slice";

// API -> https://jsonplaceholder.typicode.com/users/

function* fetchUsers() {
  try {
    const r = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(fetchUsersSuccess(r.data));
  } catch (error) {
    yield put(fetchUserFailure(error))
  }
}

export default all([takeLatest("user/fetchUsers", fetchUsers)]);
