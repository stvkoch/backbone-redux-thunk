import * as syncActions from './../redux/synchronize';

import campaignModule from './../campaign/module';

const UPDATE_REALTIME_REPORT = 'bc/UPDATE_REALTIME_REPORT';

// it is that we want keep syncronized
let backboneCampaign = null;

// actions
export function fetchCampaignReport(attrs) {
  return (dispatch) => {

    backboneCampaign = campaignModule.createModel(attrs);

    backboneCampaign.on('change', syncActions.synchronizeWithAction(dispatch, UPDATE_REALTIME_REPORT));

    dispatch(
      syncActions.synchronizeState(
        null,
        backboneCampaign.toJSON &&
        backboneCampaign.toJSON(),
        UPDATE_REALTIME_REPORT,
      )
    );
  }
}

// reducer
export default function reducer(state = null, action) {
  if ( action.type === UPDATE_REALTIME_REPORT )
    return Object.assign({}, state, {
      campaign: action.payload.data
    });

  return state;

}

