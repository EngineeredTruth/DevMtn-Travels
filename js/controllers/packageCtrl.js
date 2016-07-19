angular.module('devmtnTravel')
  .controller('packageCtrl',function($scope, mainSrv, $stateParams){

    $scope.travelInfo = mainSrv.travelInfo;

function changeBackground (id){

  for(var i = 0; i < $scope.travelInfo.length; $scope.travelInfo){

    if($scope.travelInfo[index].id == id){
        $scope.background = {
          background: 'url('+$scope.travelInfo[index].image+')'
        };
    }
  }
}

// console.log($stateParams.x);

changeBackground($stateParams.id);

  });

  // <!-- Use the ng-style directive to change the background to the image link on the data object we are getting from the controller
  //       you will need to write a function that checks the url params and then loops over the data object in the service and then returns
  //       the object the matches the id being passed in the url params. Do this in your controller -->

  // for(var i = 0; i < $scope.travelInfo.length; i++) {
  //   // console.log('index: '+ i + ' $scope.travelInfo.id: ' + $scope.travelInfo[i].id);
  //   // console.log('$stateParams:' + id);
  //   // console.log($scope.travelInfo[i].id);
  //   // console.log(Number(id));
  //   if($scope.travelInfo[i].id == id){
  //       console.log($scope.travelInfo[i].image);
  //       console.log('yay');
  //         $scope.background = {'background':'url('+$scope.travelInfo[i].image+')'};
  //         break;
  //     }
  // }
