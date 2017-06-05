import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title')? this.get('title') : "",
        date: this.get('date')? this.get('date') : "",
        author: this.get('author')? this.get('author') : "",
        content: this.get('content')? this.get('content') : ""
      };
      this.sendAction('saveQuestion', params);
      // clear the form
      this.set('title', '');
      this.set('date', '');
      this.set('author', '');
      this.set('content', '');
    }
  }
});
