import * as syncActions from './../redux/synchronize';

import campaignModule from './module';

// it is that we want keep syncronized
let backboneCampaign = null;
const STATE_NAME = 'campaign';


// actions
export function campaignCreate(attributes) {
  return (dispatch) => {

    backboneCampaign = campaignModule.createModel(attributes);
    backboneCampaign.on('change', syncActions.synchronizeWithRedux(dispatch, STATE_NAME));

    dispatch(
      syncActions.synchronizeState(
        STATE_NAME,
        backboneCampaign.toJSON &&
        backboneCampaign.toJSON()
      )
    );
  }
}


export function campaignSetAttributes(attributes) {
  return dispatch => backboneCampaign &&
  backboneCampaign.set(attributes);
}


// reducer
export default function reducer(state = backboneCampaign) {
  return state;
}
