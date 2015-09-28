import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    search() {
      var params = {
        searchKey: this.get('searchKey'),
        listings: this.get('listings')
      }
      this.sendAction('search', params);
    }
  }
});
