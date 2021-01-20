angular.module("myApp",["ui.router"])

    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("app",{
                url:"/app",
                views:{
                    main:{
                        templateUrl:"templets/main.html",
                        controller:"appCtrl"
                    }
                }
            })

            .state("app.home",{
                url:"/home",
                views:{
                    sub:{
                        templateUrl:"templets/home.html",
                        controller:"homeCtrl"
                    }
                }
            })
            .state("app.store",{
                url:"/store",
                views:{
                    sub:{
                        templateUrl:"templets/store.html",
                        controller:"storeCtrl"
                    }
                }
            })

            .state("app.contact",{
                url:"/contact",
                views:{
                    sub:{
                        templateUrl:"templets/contact.html",
                        controller:"contactCtrl"
                    }
                }
            })

        $urlRouterProvider.otherwise("/app/home")

    })