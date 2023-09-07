function skillsMember() {
  return {
    restrict: 'E',
    template: '<div class="skills-member"><span ng-repeat="skill in skills" class="label label-default">{{skill}}</span></div>',
    scope: {
      skills: '='
    }
  };
}


