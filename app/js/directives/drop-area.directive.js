angular.module('foot').directive('dropArea', function (draggedElement) {
  return {
    restrict: 'E',
    scope: {
      position: '=',
    },
    template: '<div>{{position.type}}<br><player-draggable myclass="player" position="position"></player-draggable></div>',
    link: function (scope, element) {
      element.bind('drop', function (event) {
        event.preventDefault();

        scope.position.player = angular.fromJson(event.dataTransfer.getData('text/html'));

        if(draggedElement.oldposition){
          delete draggedElement.oldposition.player;
        }

        scope.$apply();
      });
      element.bind('dragover', function (event) {
        event.preventDefault();
      });
    }
  };
});
