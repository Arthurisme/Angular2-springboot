import {Component} from '@angular/core';
import {HomeComponent} from './components/home.component';
import {NavBar} from './components/nav-bar.component';
import {MyAlbum} from './components/my-album.component';
import {Register} from './components/register.component';
import {Login} from './components/login.component';


import {RouteConfig,ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {RegisterService} from "./services/register.service";
import {LoginService} from "./services/login.service";


import {UserService} from "./services/user.service";
import {PhotoService} from "./services/photo.service";







@Component({
    selector: 'my-app',
    directives:[NavBar,HomeComponent,MyAlbum,ROUTER_DIRECTIVES,Login],
    providers:[ROUTER_PROVIDERS,HTTP_PROVIDERS,RegisterService,LoginService,UserService,PhotoService],
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})

@RouteConfig([
    {path:'/home',name:'Home',component:HomeComponent,useAsDefault:true},
    {path:'/register',name:'Register',component:Register},
    {path:'/login',name:'Login',component:Login},
    {path:'/my-album',name:'MyAlbum',component:MyAlbum},
])

export class AppComponent { }
