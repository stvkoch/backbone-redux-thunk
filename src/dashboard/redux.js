import * as syncActions from './../redux/synchronize';


// it is that we want keep syncronized
let dashboardsCampaigns = null;
const STATE_NAME = 'dashboard';

// actions types
const DASHBOARD_OPEN_DASHBOARD = 'backboneThunk/DASHBOARD_OPEN_DASHBOARD';
const DASHBOARD_SET_FILTERS_AVAILABLE_DASHBOARD = 'backboneThunk/DASHBOARD_SET_FILTERS_AVAILABLE_DASHBOARD';
const DASHBOARD_SET_COLUMNS_AVAILABLE_DASHBOARD = 'backboneThunk/DASHBOARD_SET_COLUMNS_AVAILABLE_DASHBOARD';
const DASHBOARD_SET_DATA_DASHBOARD = 'backboneThunk/DASHBOARD_SET_DATA_DASHBOARD';


// actions
export function openDashboard(dashboard) {
  return {
    type: DASHBOARD_OPEN_DASHBOARD,
    dashboard
  };
}

export function setFiltersAvailable(dashboard, filtersAvailable) {
  return {
    type: DASHBOARD_SET_FILTERS_AVAILABLE_DASHBOARD,
    payload: {
      dashboard,
      filters
    }
  };
}

export function setColumnsAvailable(dashboard, columns) {
  return {
    type: DASHBOARD_SET_COLUMNS_AVAILABLE_DASHBOARD,
    paylod: {
      dashboard,
      columns
    }
  };
}



export function selectData(filters, columns) {
  return dispatch => backboneCampaign &&
  backboneCampaign.set(attributes);
}

const initialState = {
  ads_account: {
    filtersAvailable: null,
    collumnsAvailable: null,
    filter: null,
    column: null,
    data: []
  }
}

// reducer
export default function reducer(state = initalState, action) {
  switch(action.type) {
    case DASHBOARD_OPEN_DASHBOARD:
      return {
        ...state,
        dashboard: action.payload.dashboard
      };

    case DASHBOARD_SET_FILTERS_AVAILABLE_DASHBOARD:
      return {...state,
        [action.payload.dashboard]: {
          ...state[action.payload.dashboard],
          filtersAvailable: actions.payload.filters
        }
      };

    case DASHBOARD_SET_COLUMNS_AVAILABLE_DASHBOARD:
      return {...state,
        [action.payload.dashboard]: {
          ...state[action.payload.dashboard],
          columns: actions.payload.columns
        }
      };

    case DASHBOARD_SET_DATA_DASHBOARD:
      return {...state,
        [action.payload.dashboard]: {
          ...state[action.payload.dashboard],
          data: actions.payload.filters
        }
      };
  };
}
