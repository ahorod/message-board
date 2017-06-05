import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    update(question) {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        author: this.get('author'),
        content: this.get('content')
      };
      this.sendAction('update', question, params);
    }
  }
});
