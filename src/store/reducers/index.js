import {combineReducers} from 'redux';

import auth from './Auth';
import dashboard from './Dashboard';
import services from './Services';
// import pawns from './Pawns';
import wallet from './Wallet';
import bank from './Bank';
import profile from './Profile';
import posttask from './PostTask';
import bookings from './Bookings';
import messages from './Messages';

const reducer = combineReducers({
  auth,
  dashboard,
  services,
  bank,
  wallet,
  profile,
  posttask,
  bookings,
  messages,
});

export default reducer;
