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
var http_1 = require('@angular/http');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.sendCredentials = function (model) {
        var tokenUrl = "http://localhost:8080/api/login";
        var headers1 = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(tokenUrl, JSON.stringify(model), { headers: headers1 });
    };
    // check if downloaded token same with server:
    LoginService.prototype.sendToken = function (token) {
        var userUrl = "http://localhost:8080/rest/user/users";
        var headers2 = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
        return this.http.get(userUrl, { headers: headers2 });
    };
    LoginService.prototype.checkLogin = function () {
        if (localStorage.getItem("currentUserName") != "" && localStorage.getItem("token") != "") {
            return true;
        }
        else {
            return false;
        }
    };
    LoginService.prototype.logout = function () {
        localStorage.setItem("token", "");
        localStorage.setItem("currentUserName", "");
        alert("You just logged out.");
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//
// import {Injectable} from '@angular/core';
// import {Http,Headers} from '@angular/http';
// import  {Observable} from 'rxjs/Observable';
//
//
// @Injectable()
// export class LoginService {
//     constructor (private http:Http) {}
//
//     sendCredentials (model) {
//         let tokenUrl = "http://localhost:8080/user/login";
//         let headers1 = new Headers({'Content-Type': 'application/json'});
//
//         return this.http.post(tokenUrl, JSON.stringify(model), {headers: headers1});
//     }
//
//     // check if downloaded token same with server:
//     sendToken (token) {
//         let userUrl = "http://localhost:8080/rest/user/users";
//         let headers2 = new Headers({'Authorization': 'Bearer '+token});
//
//         return this.http.get(userUrl,  {headers: headers2});
//     }
//
//     checkLogin()
//     {
//         if(localStorage.getItem("currentUserName")!="" && localStorage.getItem("token")!=""){
//             return true;
//         }else {
//             return false;
//         }
//     }
//
//     logout()
//     {
//         localStorage.setItem("token","");
//         localStorage.setItem("currentUserName","");
//         alert("You just logged out.")
//     }
//
// } 
//# sourceMappingURL=login.service.js.map