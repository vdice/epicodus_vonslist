import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      listings: this.store.findAll('listing'),
      foundListings: []
    });
  },

  actions: {
    search(params) {
      // var model = this.currentModel;
      // console.log(this.currentModel)
      // var foundListings = model.foundListings;
      //
      // params.listings.forEach(function(listing) {
      //   if (listing.get('title').indexOf(params.searchKey) > -1 ||
      //       listing.get('description').indexOf(params.searchKey) > -1) {
      //         model.foundListings.push(listing);
      //       }
      // });
      //
      // // model.set('foundListings', foundListings);
      // model.foundListings.forEach(function(foundListing) {
      //   console.log(foundListing.get('title'))
      // });

      this.transitionTo('search-results', params.searchKey);
    }
  }
});
