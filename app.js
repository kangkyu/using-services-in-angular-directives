angular.module("app", ["ui.bootstrap"])
.controller("AppCtrl", function AppCtrl(){
    var app = this;

    app.alertMessage = "Something Failed";
    app.alertType = "danger";
    app.showAlert = true;
})
