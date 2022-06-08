import { all } from "redux-saga/effects";

import LoggerSaga from "./logger_saga";
import AuthSaga from "./auth_saga";
import DashboardSaga from "./dashboard_saga";
import TechnicianSaga from "./technician_saga";
import CustomerSaga from "./customer_saga";

export default function* RootSaga() {
  yield all([LoggerSaga(), AuthSaga(), DashboardSaga(), TechnicianSaga(), CustomerSaga()]);
}
