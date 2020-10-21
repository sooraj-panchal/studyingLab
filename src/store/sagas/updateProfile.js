import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import {
    showLoader, hideLoader, updateProfileSuccess, updateProfileError, getProfileWatcher
} from "../../store/actions";

function updateProfileApi(data) {
    // return axios.post(`${API_BASE_URL}/forgot`, data);
    let formdata = new FormData();
    formdata.append('token', data.payload.token);
    formdata.append('name', data.payload.name);

    return fetch(globals.mainUrl + globals.update_profile, {
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formdata
    }).then((res) => res.json())

}


function* updateProfileActionEffect(action) {
    try {
        yield put(showLoader());
        const response = yield call(updateProfileApi, action);
        console.log("======>get update Profile Response ", response)
        // if (response.data.status_code === 200) {
        yield put(updateProfileSuccess(response.data));
        yield put(getProfileWatcher())
        // } else {
        //     showErrorMessage(response.data.payload.msg);
        //     yield put(forgotPasswordError(response.data));
        // }
    } catch (e) {
        // const error = responseError(e);
        console.log("=====>get updateProfile Error", e)
        yield put(updateProfileError(e));
    } finally {
        yield put(hideLoader());
    }
}
export function* updateProfileWatcher() {
    yield takeLatest(actionTypes.UPDATE_PROFILE_WATCHER, updateProfileActionEffect);
}

