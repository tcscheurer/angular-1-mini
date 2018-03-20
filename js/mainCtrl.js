angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = ['Jon','Ryan','Myself','Coke'];
    $scope.addFriend = function(){
        $scope.friends.push($scope.friendName)
    }
});

