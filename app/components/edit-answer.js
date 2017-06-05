import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    updateAnswer(answer) {
      var params = {
        name: this.get('name'),
        date: this.get('date'),
        author: this.get('author'),
        content: this.get('content')
      };
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
