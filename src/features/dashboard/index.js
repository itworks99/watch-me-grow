'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './dashboard.routes';
import AnswerService from '../../services/answer.service';
import QuestionnaireService from '../../services/questionnaire.service';
import HomeController from './dashboard.controller';
import AgeService from '../../services/age.service';

import './dashboard.scss';

/**
 * "Dashboard" that shows details of the child and all the responses that has been made for them so far.
 */
export default angular.module('app.dashboard', [uirouter, AnswerService, QuestionnaireService, AgeService])
  .config(routing)
  .controller('DashboardController', HomeController)
  .name;