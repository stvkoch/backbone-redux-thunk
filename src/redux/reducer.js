import campaigns from './../campaigns/redux';
import campaign from './../campaign/redux';

import report from './../report/redux';

export const reducersCampaigns = {
  campaigns,
  campaign
};

export const reducersNested = {
  report,
  overview: (state = null) => state
};
