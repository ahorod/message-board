import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
     var params = {
       name: this.get('name')? this.get('name') : "",
       date: this.get('date')? this.get('date') : "",
       author: this.get('author')? this.get('author') : "",
       content: this.get('content')? this.get('content') : "",
       post: this.get('post')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
