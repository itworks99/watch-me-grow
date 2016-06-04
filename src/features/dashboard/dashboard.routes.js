'use strict';

import defineHeader from '../root/header/define-header';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: 'child/{childId:string}/dashboard',
      parent: 'root',
      views: defineHeader({
        '': {
          template: require('./dashboard.html'),
          controller: 'DashboardController',
          controllerAs: 'dashboard'
        }
      }, 'DashboardController')
    });
}