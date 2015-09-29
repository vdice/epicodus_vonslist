import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  showUpdateListing: false,
  actions: {
    updateListingShow() {
      this.set('showUpdateListing', true);
    },
    updateListingHide() {
      this.set('showUpdateListing', false);
    },
    updateListing(listing) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        category: this.get('category'),
        date: new Date()
      };
      this.sendAction('updateListing', listing, params);
      this.set('showUpdateListing', false);
    }
  }
});
