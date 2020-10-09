import { call, put, takeLatest } from "redux-saga/effects";
import * as globals from '../../utils/globals'
import * as actionTypes from "../../store/actionTypes";
import { 
    showLoader, hideLoader, getProfileSuccess, getProfileError
} from "../../store/actions";

function getProfileAapi(data) {
    // return axios.post(`${API_BASE_URL}/forgot`, data);
    let formdata = new FormData();
    formdata.append('token', data.payload.token);

    return fetch(globals.mainUrl + globals.get_profile, {
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formdata
    }).then((res) => res.json())

}


function* getProfileActionEffect(action) {
    try {
        yield put(showLoader());
        const response = yield call(getProfileAapi, action);
        console.log("======>getProfile Response ", response)
        // if (response.data.status_code === 200) {
        yield put(getProfileSuccess(response.data));
        // } else {
        //     showErrorMessage(response.data.payload.msg);
        //     yield put(forgotPasswordError(response.data));
        // }
    } catch (e) {
        // const error = responseError(e);
        console.log("=====>get Profile Error", e)
        yield put(getProfileError(e));
    } finally {
        yield put(hideLoader());
    }
}

export function* getProfileWatcher() {
    yield takeLatest(actionTypes.GET_PROFILE_WATCHER, getProfileActionEffect);
}

