import Ember from 'ember';

export default Ember.Component.extend({
  showNewListing: false,

  actions: {
    newListingShow() {
      this.set('showNewListing', true);
    },
    newListingHide() {
      this.set('showNewListing', false);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        category: this.get('category'),
        date: new Date()
      };

      this.sendAction('saveListing', params);
    }
  }
});
