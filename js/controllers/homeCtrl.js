angular.module("myApp")

.controller("homeCtrl",function($scope,$rootScope){
// most popular product


$scope.most = [{name:" IPHONE 6",price:"1231",img:"../img/1.jpg",like:3},
{name:"GALAXY S10",price:"1231",img:"../img/2.jpg",like:1},
{name:" IPHONE 8 PLUS",price:"1231",img:"../img/4.jpg",like:6},
{name:"INFINIX 6",price:"1231",img:"../img/6.jpg",like:7},]




    $scope.inc=function(index){
       $scope.most[index].like++
       $scope.animate = 'animated bounceInLeft';
    }

    $scope.min=function(index){
        
        if($scope.like!==0){
            $scope.most[index].like--
        }
        else{
            $scope.most[index].like = 0
            $scope.delAni = 'animated bounceInLeft'
        }
    }
})