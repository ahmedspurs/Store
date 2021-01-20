angular.module("myApp")

.controller("storeCtrl",function($scope,$rootScope){
        $scope.store=[
            [{name:" IPHONE 6",price:"1231",img:"../img/1.jpg",like:3},
            {name:"GALAXY S10",price:"1231",img:"../img/2.jpg",like:1},
            {name:" IPHONE 8",price:"1231",img:"../img/3.jpg",like:6},
            {name:"INFINIX 6",price:"1231",img:"../img/4.jpg",like:7},
            {name:" IPHONE 6",price:"1231",img:"../img/1.jpg",like:4},
            {name:"GALAXY S10",price:"1231",img:"../img/2.jpg",like:20},
            {name:" IPHONE 8",price:"1231",img:"../img/3.jpg",like:16},
            {name:"INFINIX 6",price:"1231",img:"../img/4.jpg",like:7}]

            ,

            [{name:"MATE 10 PRO",price:"1231",img:"../img/5.jpg",like:3},
{name:"GALAXY S20 ",price:"1231",img:"../img/6.jpg",like:2},
{name:" IPHONE 5",price:"1231",img:"../img/7.jpg",like:6},
{name:"INFINIX HOT 7",price:"1231",img:"../img/8.jpg",like:6},
{name:"MATE 10 PRO",price:"1231",img:"../img/5.jpg",like:9},
{name:"GALAXY S20",price:"1231",img:"../img/6.jpg",like:4},
{name:" IPHONE 5",price:"1231",img:"../img/7.jpg",like:6},
{name:"INFINIX HOT 7",price:"1231",img:"../img/8.jpg",like:12}]


        ]

    $rootScope.ev=function(event){
        event.preventDefault()
    }

    $rootScope.card = 0;

    $scope.cardP = function(){
        $rootScope.card++
    }

    $scope.inc = function(index){
        $scope.store[0][index].like++
        $scope.store[1][index].like++
    }

    $scope.mini = function(index){

        if($scope.store[0][index].like==0){
            $scope.store[0][index].like = 0
        }
        else if($scope.store[1][index].like==0){
            $scope.store[1][index].like
        }
        else{

        $scope.store[0][index].like--
        $scope.store[1][index].like--

        }
    }
})