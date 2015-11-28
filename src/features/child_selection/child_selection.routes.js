'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('child_selection', {
      url: '/child_selection',
      template: require('./child_selection.html'),
      controller: 'ChildSelectionController',
      controllerAs: 'childSelection'
    });
}