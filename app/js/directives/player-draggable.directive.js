angular.module('foot').directive('playerDraggable', function (draggedElement) {
  return {
    restrict: 'E',
    scope: {
      myclass: '@',
      position: '='
    },
    template: '<span ng-class="myclass">{{position.player.firstname}} {{position.player.lastname}}</span>',
    link: function (scope, element) {
      element[0].draggable = true;

      element.bind('dragstart', function (event) {
        draggedElement.elt = element;
        draggedElement.oldposition = scope.position;
        event.dataTransfer.setData('text/html', angular.toJson(scope.position.player));
      });

    }
  };
});
