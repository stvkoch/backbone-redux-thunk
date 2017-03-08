import Backbone from 'backbone';

import Campaign from './../campaign/model';

export default class Campaigns extends Backbone.Collection {
  static model = Campaign;

}

