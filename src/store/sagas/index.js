import {takeEvery, takeLatest, all} from 'redux-saga/effects';
import * as actions from './../actions/ActionTypes';

import * as auth from './Auth';
import * as dashboard from './Dashboard';
import * as services from './Services';
import * as pawns from './Pawns';
import * as posttask from './PostTask';
import * as businesses from './Businesses';
import * as register from './Register';
import * as wallet from './Wallet';
import * as bank from './Bank';
import * as profile from './Profile';
import * as media from './Media';
import * as bookings from './Bookings';
import * as messages from './Messages';

function* rootSaga() {
  yield takeLatest(actions.INIT_LOGIN, auth.authenticate);
  yield takeLatest(actions.INIT_AUTH_STATUS, auth.checkAuthStatus);

  yield takeLatest(actions.INIT_LOGOUT, auth.logout);
  yield takeLatest(actions.INIT_SIGNUP, auth.register);
  yield takeLatest(actions.INIT_CHANGE_PASSWORD, auth.changepassword);

  // Dashboard
  yield takeLatest(actions.GET_USER_DETAIL, dashboard.getUserDetails);
  // yield takeLatest(actions.GET_CATEGORY, dashboard.getCategory);
  // yield takeLatest(actions.GET_SUBCATEGORY, dashboard.getSubCategory);
  yield takeLatest(
    actions.GET_PROVIDER_DASHBOARD_DATA,
    services.getProviderDashboardData,
  );
  //Requests
  yield takeLatest(
    actions.SUBMIT_SERVICE_REQUEST,
    services.submitServiceRequest,
  );
  yield takeLatest(actions.GET_MY_LATEST_TASK, services.getMyLatestTask);
  yield takeLatest(actions.GET_TASK_DETAILS, services.getTaskDetails);

  yield takeLatest(actions.ACCEPT_REQUEST, services.acceptRequestProcess);
  yield takeLatest(actions.GET_ORDERLIST, services.getOrderList);

  yield takeLatest(actions.GET_CATEGORY, posttask.getCategory);
  yield takeLatest(actions.GET_TYPES, pawns.getTypes);
  // yield takeLatest(actions.SUBMIT_PAWN_REQUEST, pawns.submitPawnRequest);

  yield takeLatest(actions.GET_ALL_TRANSACTIONS, wallet.getAllTransaction);

  yield takeLatest(actions.GET_MYPAWNS, pawns.getMyPawns);
  yield takeLatest(actions.GET_PAWNDETAILS, pawns.getPawnDetails);
  yield takeLatest(actions.CANCEL_MYPAWNS, pawns.cancelMyPawnsRequest);

  yield takeLatest(actions.GET_NEW_PAWNS_LIST, pawns.getNewPawnsList);
  yield takeLatest(actions.GET_ACCEPTED_PAWN_LIST, pawns.getAcceptedPawnList);
  yield takeLatest(actions.GET_PRODUCTS, pawns.getProducts);
  yield takeLatest(actions.PROCEED_TO_PURCHASE, pawns.proceedToPurchase);
  yield takeLatest(actions.PROCEED_TO_ACCEPT, pawns.proceedToAccept);
  yield takeLatest(actions.GET_ORDER_LIST, pawns.getOrders);

  //Wallet
  yield takeLatest(actions.GET_WALLET_BALANCE, wallet.getWalletBalance);
  yield takeLatest(actions.ADD_AMOUNT_TO_WALLET, wallet.addAmountToWallet);

  yield takeLatest(actions.SET_DUTY, profile.setDuty);

  //PROFILE
  yield takeLatest(actions.SAVE_BANK_DETAILS, bank.saveBankDetails);
  yield takeLatest(
    actions.UPDATE_PROFILE_DETAILS,
    profile.updateProfileDetails,
  );

  yield takeLatest(actions.UPLOAD_KYC, profile.uploadKycFile);
  yield takeLatest(
    actions.GET_USER_DETAIL_PROFILE,
    profile.getmyprofiledetails,
  );
  // Bookings

  yield takeLatest(actions.GET_UPCOMING_BOOKINGS, bookings.getUpcomingBookings);
  yield takeLatest(actions.GET_MY_BOOKINGS, bookings.getMyBookings);

  // Messages
  yield takeLatest(actions.GET_MESSAGES, messages.getMyMessages);
  yield takeLatest(actions.GET_MESSAGE_DETAILS, messages.getMessageDetails);

  //Businesses
  // yield takeLatest(actions.GET_BUSINESSES, businesses.getBusinesses);
  // yield takeLatest(
  //   actions.GET_BUSINESSES_DETAILS,
  //   businesses.getBusinessesDetails,
  // );
  // yield takeLatest(actions.SAVE_BUSINESS_REQUEST, businesses.saveBusinessData);
  // yield takeLatest(actions.GET_STATES, businesses.getStates);
  // yield takeLatest(actions.GET_CITIES, businesses.getCities);
  // //Registration
  // yield takeLatest(actions.GET_SPONSORID, register.getSponsorId);
  // yield takeLatest(actions.GET_USERNAME, register.getUserName);

  // yield takeLatest(actions.INIT_REGISTRATION, register.processRegistrationSaga);

  //Wallet
  // yield takeLatest(actions.GET_WALLET_BALANCE, wallet.getWalletBalance);

  // //Subscription
  // yield takeLatest(actions.SAVE_SUBSCRIPTION, subscription.saveSubscription);
  // yield takeLatest(actions.UPLOAD_FILES, media.uploadFiles);
}

export default rootSaga;
