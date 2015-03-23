/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-cropper',

  included: function(app){
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/cropper/dist/cropper.js');
    this.app.import(app.bowerDirectory + '/cropper/dist/cropper.css');
  }
};
