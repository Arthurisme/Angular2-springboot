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
var user_1 = require('../models/user');
var comment_1 = require('../models/comment');
var photo_1 = require('../models/photo');
var user_service_1 = require("../services/user.service");
var photo_service_1 = require("../services/photo.service");
var comment_service_1 = require("../services/comment.service");
// import {Router} from '@angular/router-deprecated';
var router_deprecated_1 = require('@angular/router-deprecated');
var ImageComments = (function () {
    // userName:string;
    // testNumberId:Number ;
    function ImageComments(userService, commentService, routeParams, photoService) {
        var _this = this;
        this.userService = userService;
        this.commentService = commentService;
        this.routeParams = routeParams;
        this.photoService = photoService;
        this.myLocalStrorage = localStorage;
        this.newComment = new comment_1.Comment();
        this.user = new user_1.User;
        // let photoId = Number.parseInt(this.routeParams.get('id'));
        this.photoId = Number.parseInt(this.routeParams.get('id'));
        // way 1 to show comments: no comments get from server----------------:
        // this.userService.getUserByName(localStorage.getItem("currentUserName"))
        //     .subscribe(
        //         user => {
        //
        //             this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        //         },
        //         error => console.log(error)
        //     )
        // // Another way to show comments: data comments get from server !!!photoId work only form routerParams :
        this.commentService.getCommentsByPhotoId(this.photoId)
            .subscribe(function (comments) {
            _this.comments = JSON.parse(JSON.parse(JSON.stringify(comments))._body);
        }, function (error) { return console.log(error); });
    }
    ImageComments.prototype.onSubmit = function () {
        var _this = this;
        this.newComment.photo = this.photo;
        this.newComment.userName = this.user.userName;
        this.newComment.photoId = this.photo.photoId;
        // way 1 to show comments: no comments get from server------------:
        // this.commentService.addComment(this.newComment)
        //     .subscribe(
        //         photo => this.photoService.getPhotoById(this.photo.photoId).subscribe(
        //             photo => this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body),
        //             error => console.log(error)
        //         )
        //     );
        // Another way to show comments: data comments get from server----------------:
        this.commentService.addComment(this.newComment)
            .subscribe(function (photo) { return _this.commentService.getCommentsByPhotoId(_this.photoId)
            .subscribe(function (comments) {
            _this.comments = JSON.parse(JSON.parse(JSON.stringify(comments))._body);
        }, function (error) { return console.log(error); }); });
        this.newComment = new comment_1.Comment();
    };
    __decorate([
        core_1.Input('photo'), 
        __metadata('design:type', photo_1.Photo)
    ], ImageComments.prototype, "photo", void 0);
    ImageComments = __decorate([
        core_1.Component({
            selector: 'image-comments',
            providers: [comment_service_1.CommentService],
            templateUrl: 'app/components/image-comments.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, comment_service_1.CommentService, router_deprecated_1.RouteParams, photo_service_1.PhotoService])
    ], ImageComments);
    return ImageComments;
}());
exports.ImageComments = ImageComments;
//# sourceMappingURL=image-comments.component.js.map