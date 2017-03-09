import {expect} from 'chai';
import sinon from 'sinon';

import {reducersCampaigns} from './../src/redux/reducer';
import configureStore from './../src/store';

import * as campaignsActions from './../src/campaigns/redux';
import * as campaignActions from './../src/campaign/redux';


const initialState = {campaigns:null, campaign: null};
const store = configureStore(reducersCampaigns, initialState);

describe('Requirements', () => {

  it('Initial state empty', () => {
    expect(store.getState()).to.be.deep.equal(initialState);
  });


  it('Initial state with collection', () => {
    /*
      Our app sould support:
      initial state
      {
      campaigns: [...] -> appoint to collectionCampaigns
      }
    */
    const filters = [ // for tests filter are models
      {title: 'Campaign title 1', description: '...1'},
      {title: 'Campaign title 2', description: '...2'},
      {title: 'Campaign title 3', description: '...3'},
      {title: 'Campaign title 4', description: '...4'},
      {title: 'Campaign title 5', description: '...5'}
    ];

    // assert current state
    expect(store.getState().campaigns).to.be.not.deep.equal(filters);

    // get collection using action
    store.dispatch(campaignsActions.campaignsRequest(filters))

    // aserts changed state
    expect(store.getState()).to.be.not.deep.equal(initialState);
    expect(store.getState().campaigns).to.be.deep.equal(filters);
  });

  it('Initial state with model', () => {
    /*
      Our app sould support:
      initial state
      {
      campaign: {cid: 1, title: 'aaa'} appoint to modelCampaign
      }
    */
    const attributes = {title: 'hello title', describe: 'fake describe'};

    // assert current state
    expect(store.getState().campaign).to.be.not.deep.equal(attributes);

    // create new campaign and set on state
    store.dispatch(campaignActions.campaignCreate(attributes))

    // aserts changed state
    expect(store.getState().campaign).to.be.deep.equal(attributes);
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
    const title = 'super title changed';
    expect(store.getState().campaign.title).to.be.not.null;
    expect(store.getState().campaign.title).to.be.not.equal(title);
    store.dispatch(campaignActions.campaignSetAttributes(
      {
        title
      }
    ));

    expect(store.getState().campaign.title).to.be.equal(title);
  });



  it('Should be possible we replace model using action, try dispatch action to openModel', () => {
  /*
    We could replace campaign redux way: actionOpenCampaign(2)
    {
    campaigns: [...] -> appoint to collectionCampaigns
    campaign: {cid: 2, title: 'asdas'} appoint to modelCampaign
    }
  */
    const attributes = {title: 'new title re-created', describe: 'other fake describe'};


    // assert current state
    expect(store.getState().campaign).to.be.not.deep.equal(attributes);

    // create new campaign and set on state
    store.dispatch(campaignActions.campaignCreate(attributes))

    // aserts changed state
    expect(store.getState().campaign).to.be.deep.equal(attributes);
  });

});




