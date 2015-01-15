angular.module("app", ["ui.bootstrap"])
.service("alertService", function alertService(){
    var alertService = this;

    alertService.alertMessage = "Something Failed";
    alertService.alertType = "danger";
    alertService.showAlert = true;
})

.controller("AppCtrl", function AppCtrl(alertService){
    var app = this;
    app.alertService = alertService;
    app.somethingFailed = function(){

    }
})
