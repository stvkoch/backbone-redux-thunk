import * as syncActions from './../redux/synchronize';

import campaignsModule from './module';


// it is that we want keep syncronized
let backboneCampaigns = null;
const STATE_NAME = 'campaigns';

// actions
export function campaignsRequest(filters, collumns) {
  return (dispatch) => {

    backboneCampaigns = campaignsModule.getCampaigns(filters);

    backboneCampaigns.on('change', syncActions.synchronizeWithRedux(dispatch, STATE_NAME));

    dispatch(
      syncActions.synchronizeState(
        STATE_NAME,
        backboneCampaigns.toJSON &&
        backboneCampaigns.toJSON()
      )
    );
  }
}


// reducer
export default function reducer(state = backboneCampaigns) {
  return state;
}
