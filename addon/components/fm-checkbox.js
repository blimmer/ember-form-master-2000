import Ember from 'ember';
export default Ember.Component.extend({
  layoutName: 'components/ember-form-master-2000/fm-checkbox',
  classNameBindings: ['checkboxWrapperClass', 'errorClass'],
  checkboxWrapperClass: function() {
    return this.fmconfig.checkboxWrapperClass;
  }.property(),
  errorClass: function() {
    if(this.get('errors') && this.get('showErrors') || this.get('parentView.showErrors')) {
      return this.fmconfig.errorClass;
    }
  }.property('errors', 'showErrors')
});