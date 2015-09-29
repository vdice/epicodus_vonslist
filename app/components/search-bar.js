import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    search() {
      var params = {
        searchKey: this.get('searchKey')
      };
      this.sendAction('search', params);
    }
  }
});
