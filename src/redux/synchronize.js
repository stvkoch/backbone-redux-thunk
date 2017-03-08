export const SYNC_BACKBONE_STATE = 'backboneReduxThunk/SYNC_BACKBONE_STATE';
export const SYNC_BACKBONE_IGNORE = 'backboneReduxThunk/SYNC_BACKBONE_IGNORE';

export const ignoreAction = {type: SYNC_BACKBONE_IGNORE};

export function synchronizeWithRedux(dispatch, stateName) {
  return (entity) => {
    dispatch(synchronizeState(stateName, entity.toJSON && entity.toJSON()));
  }
}


export function synchronizeState(name, data) {
  return {
    type: SYNC_BACKBONE_STATE,
    payload: {
      name,
      data
    }
  }
}

export function reducer(state = null, action) {
  switch(action.type) {
    case SYNC_BACKBONE_STATE:
      return Object.assign({}, state, {[action.payload.name]: action.payload.data});
  }

  return state;

}

export function createSyncReducer(reducers) {
  return (state, action) => {
    return reducer(reducers(state, action), action);
  }
}
