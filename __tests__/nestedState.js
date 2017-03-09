import {expect} from 'chai';
import sinon from 'sinon';

import {reducersNested} from './../src/redux/reducer';
import configureStore from './../src/store';

import * as reportActions from './../src/report/redux';

const initialState = {report: null, overview: null};
const store = configureStore(reducersNested, initialState);

describe('Requirements', () => {

  it('Initial state empty', () => {
    expect(store.getState()).to.be.deep.equal(initialState);
  });


  it('Initial state with collection', () => {

    const models = {title: '1', desc: 'd1'};

    expect(store.getState()).to.be.deep.equal(initialState);
    expect(store.getState().report).to.be.null;

    store.dispatch(reportActions.fetchCampaignReport(models));

    expect(store.getState().report.campaign).to.be.deep.equal(models);

  });

  it('Initial state with model', () => {
    /*
      Our app sould support:
      initial state
      {
      campaign: {cid: 1, title: 'aaa'} appoint to modelCampaign
      }
    */
  });



  it('If I change model should be change state, try change title of model', () => {
    /*
      we could change the model and the state should be syncronize
      modelCampaign.set({title:'oioioi'})
      our state should change to:
      {
      campaigns: [...] -> appoint to collectionCampaigns
      campaign: {cid: 1, title: 'oioioi'} appoint to modelCampaign
      }
    */
  });



  it('Should be possible we replace model using action, try dispatch action to openModel', () => {
  /*
    We could replace campaign redux way: actionOpenCampaign(2)
    {
    campaigns: [...] -> appoint to collectionCampaigns
    campaign: {cid: 2, title: 'asdas'} appoint to modelCampaign
    }
  */
  });

});




