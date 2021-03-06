"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var photo_list_component_1 = require('./photo-list.component');
var side_panel_component_1 = require('./side-panel.component');
var apitest_service_1 = require("../services/apitest.service");
var router_deprecated_1 = require('@angular/router-deprecated');
var HomeComponent = (function () {
    function HomeComponent(apiTestService, router) {
        this.apiTestService = apiTestService;
        this.router = router;
    }
    HomeComponent.prototype.onClick = function () {
        // this.hasThisRole = false;
        var _this = this;
        this.apiTestService.testApiRole().subscribe(function (booleanData) {
            _this.hasThisRole = JSON.parse(JSON.parse(JSON.stringify(booleanData))._body);
        }, function (error) { return console.log(error); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            directives: [photo_list_component_1.PhotoList, side_panel_component_1.SidePanel],
            templateUrl: "app/components/home.component.html"
        }), 
        __metadata('design:paramtypes', [apitest_service_1.ApiTestService, router_deprecated_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map