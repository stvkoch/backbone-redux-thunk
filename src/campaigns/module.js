import Campaigns from './collection';


export default {

  getCampaigns: (models) => {
    return new Campaigns(models);
  }

};


