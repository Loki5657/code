import {put,takeEvery} from 'redux-saga/effects'
import { LoaderTypes } from '../action_types/loader_types'
import {DashboardTypes} from '../action_types/dashboard_types'
import axios from 'axios'

function* dashboardData(){
    yield put({type:LoaderTypes.LOADER_START})

    try{
        const url="https://reqres.in/api/users"
        const res=yield axios.get(url)
        yield put({type:DashboardTypes.USER_DATA_REQUEST_SUCCESS,data: res.data.data})
        console.log('dash_saga',res.data.data)
    }
    catch(e){

    }
    yield put({ type: LoaderTypes.LOADER_STOP});
}
export default function* dashboardSaga(){
    yield takeEvery(DashboardTypes.USER_DATA_REQUEST,dashboardData);
}