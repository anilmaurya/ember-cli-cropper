import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    this.$().find('img').cropper(this.get('options') ? JSON.parse(this.get('options')) : {});
  }
})
