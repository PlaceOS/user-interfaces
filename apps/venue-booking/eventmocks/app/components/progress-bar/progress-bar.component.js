angular.module('uclaEventsApp').component('progressBar', {
  templateUrl: 'app/components/progress-bar/progress-bar.template.html',
  bindings: {
    currentStep: '<',
    totalSteps: '<',
    steps: '<'
  },
  controller: function() {
    var $ctrl = this;
  }
});
