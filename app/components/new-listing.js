import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
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
        author: this.get('author'),
        description: this.get('description'),
        category: this.get('category'),
        date: new Date()
      };

      this.sendAction('saveListing', params);
      this.set('showNewListing', false);
    }
  }
});
